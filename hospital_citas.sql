-- Active: 1770173543998@@127.0.0.1@3306@hospital_citas
-- Active: 1770173543998@@127.0.0.1@3306@mysql
-- Esquema completo para la base de datos `hospital_citas`
-- Incluye tablas: admins, admin_audit, pacientes, medicos, citas
-- Procedimientos almacenados para gestionar correo/contraseña de administradores

DROP DATABASE IF EXISTS hospital_citas;
CREATE DATABASE hospital_citas CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE hospital_citas;

-- Tabla de administradores (credenciales seguras - hash usando SHA2 como ejemplo)
-- Recomendación: generar y verificar contraseñas con bcrypt/argon2 en la capa de aplicación.
CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'admin',
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    medico_id INT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL,
    FOREIGN KEY (medico_id) REFERENCES medicos(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE admin_audit (
    id INT AUTO_INCREMENT PRIMARY KEY,
    admin_id INT NOT NULL,
    action VARCHAR(100) NOT NULL,
    old_value TEXT,
    new_value TEXT,
    changed_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (admin_id) REFERENCES admins(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla de pacientes
CREATE TABLE pacientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    curp VARCHAR(32),
    fecha_nacimiento DATE,
    genero VARCHAR(20),
    telefono VARCHAR(30),
    email VARCHAR(255),
    direccion TEXT,
    estado VARCHAR(100),
    municipio VARCHAR(100),
    localidad VARCHAR(100),
    codigo_postal VARCHAR(20),
    blood_type VARCHAR(5),
    fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY ux_pacientes_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla de médicos
CREATE TABLE medicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    area VARCHAR(150),
    telefono VARCHAR(30),
    email VARCHAR(255),
    password_hash VARCHAR(255) NULL,
    dias_trabaja ENUM('L-V', 'S-D') NOT NULL DEFAULT 'L-V',
    hora_entrada TIME NOT NULL DEFAULT '08:00:00',
    hora_salida TIME NOT NULL DEFAULT '18:00:00',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY ux_medicos_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabla de citas
CREATE TABLE citas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    paciente_id INT NOT NULL,
    medico_id INT NULL,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    motivo TEXT,
    estado ENUM('Agendada','Cancelada','Reagendada','Atendida') NOT NULL DEFAULT 'Agendada',
    creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    actualizado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (paciente_id) REFERENCES pacientes(id) ON DELETE CASCADE,
    FOREIGN KEY (medico_id) REFERENCES medicos(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Índices importantes
CREATE INDEX idx_citas_fecha ON citas(fecha);
CREATE INDEX idx_citas_estado ON citas(estado);
CREATE INDEX idx_medicos_area ON medicos(area);
-- Datos de ejemplo (semilla)
-- Admin de ejemplo: cambiar la contraseña inmediatamente luego de la instalación
INSERT INTO admins (email, password_hash, role) VALUES
('admin@ejemplo.com', SHA2('Admin123!', 512), 'superadmin');

-- Medicos (registros insertados dinámicamente por el administrador)

-- Pacientes (registros insertados dinámicamente por el administrador)

-- No se insertan citas de ejemplo para mantener relaciones limpias

-- Procedimientos almacenados para gestionar correo y contraseña de administradores
DELIMITER //
CREATE PROCEDURE sp_update_admin_email(IN p_admin_id INT, IN p_new_email VARCHAR(255))
BEGIN
    DECLARE v_old_email VARCHAR(255);
    IF p_new_email IS NULL OR TRIM(p_new_email) = '' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El correo no puede estar vacío.';
    END IF;
    SELECT email INTO v_old_email FROM admins WHERE id = p_admin_id;
    IF v_old_email IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Administrador no encontrado.';
    END IF;
    -- Verificar unicidad
    IF EXISTS(SELECT 1 FROM admins WHERE email = p_new_email AND id <> p_admin_id) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El correo ya está en uso por otro administrador.';
    END IF;
    UPDATE admins SET email = p_new_email, updated_at = CURRENT_TIMESTAMP WHERE id = p_admin_id;
    INSERT INTO admin_audit (admin_id, action, old_value, new_value) VALUES (p_admin_id, 'update_email', v_old_email, p_new_email);
END
//

CREATE PROCEDURE sp_update_admin_password(IN p_admin_id INT, IN p_new_password VARCHAR(255))
BEGIN
    DECLARE v_exists INT DEFAULT 0;
    IF p_new_password IS NULL OR TRIM(p_new_password) = '' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La contraseña no puede estar vacía.';
    END IF;
    SELECT COUNT(*) INTO v_exists FROM admins WHERE id = p_admin_id;
    IF v_exists = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Administrador no encontrado.';
    END IF;
    -- NOTA: aquí usamos SHA2 como ejemplo; preferible usar bcrypt/argon2 en la capa de aplicación.
    UPDATE admins SET password_hash = SHA2(p_new_password, 512), updated_at = CURRENT_TIMESTAMP WHERE id = p_admin_id;
    INSERT INTO admin_audit (admin_id, action, old_value, new_value) VALUES (p_admin_id, 'update_password', NULL, '***REDACTED***');
END
//

CREATE PROCEDURE sp_create_admin(IN p_email VARCHAR(255), IN p_password VARCHAR(255), IN p_role VARCHAR(50))
BEGIN
    IF p_email IS NULL OR TRIM(p_email) = '' OR p_password IS NULL OR TRIM(p_password) = '' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Email y contraseña requeridos.';
    END IF;
    IF EXISTS(SELECT 1 FROM admins WHERE email = p_email) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El correo ya existe.';
    END IF;
    INSERT INTO admins (email, password_hash, role) VALUES (p_email, SHA2(p_password, 512), IFNULL(p_role,'admin'));
END
//
DELIMITER ;

-- Vistas útiles
CREATE VIEW vw_agenda_por_medico AS
SELECT m.id AS medico_id, m.nombre AS medico_nombre, c.id AS cita_id, c.paciente_id, c.fecha, c.hora, c.estado
FROM citas c
LEFT JOIN medicos m ON c.medico_id = m.id;

-- Ejemplos de uso (ejecutar en cliente SQL una vez cargada la BD):
-- CALL sp_update_admin_email(1, 'nuevo_admin@dominio.com');
-- CALL sp_update_admin_password(1, 'NuevaContraSegura123!');

-- FIN del esquema