-- Active: 1770173543998@@127.0.0.1@3306@hospital_citas
-- Active: 1770173543998@@127.0.0.1@3306@mysql
-- Esquema completo para la base de datos `hospital_citas`
-- Incluye tablas: admins, admin_audit, pacientes, medicos, citas
-- Procedimientos almacenados para gestionar correo/contraseÃ±a de administradores

DROP DATABASE IF EXISTS hospital_citas;
CREATE DATABASE hospital_citas CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE hospital_citas;

-- Tabla de administradores (credenciales seguras - hash usando SHA2 como ejemplo)
-- RecomendaciÃ³n: generar y verificar contraseÃ±as con bcrypt/argon2 en la capa de aplicaciÃ³n.
CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'admin',
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL
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
    numero_expediente VARCHAR(50) UNIQUE,
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

-- Tabla de mÃ©dicos
CREATE TABLE medicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    area VARCHAR(150),
    telefono VARCHAR(30),
    email VARCHAR(255),
    password_hash VARCHAR(255) NULL,
    dias_disponibles VARCHAR(255) NOT NULL DEFAULT 'Lunes,Martes,Miercoles,Jueves,Viernes',
    turno VARCHAR(50) NOT NULL DEFAULT 'Lunes a Viernes',
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

-- Ãndices importantes
CREATE INDEX idx_citas_fecha ON citas(fecha);
CREATE INDEX idx_citas_estado ON citas(estado);
CREATE INDEX idx_medicos_area ON medicos(area);

-- Datos de ejemplo (semilla)
-- Admin de ejemplo: cambiar la contraseÃ±a inmediatamente luego de la instalaciÃ³n
INSERT INTO admins (email, password_hash, role) VALUES
('admin@ejemplo.com', SHA2('Admin123!', 512), 'superadmin');

INSERT INTO medicos (nombre, area, telefono, email, password_hash) VALUES
('Dr. Juan PÃ©rez', 'Medicina General', '3111230000', 'juan.perez@hospital.local', SHA2('Doctor123', 512)),
('Dra. Ana GÃ³mez', 'PediatrÃ­a', '3111230001', 'ana.gomez@hospital.local', SHA2('Doctor123', 512)),
('Dr. Luis MartÃ­nez', 'CardiologÃ­a', '3111230002', 'luis.martinez@hospital.local', SHA2('Doctor123', 512));

INSERT INTO pacientes (nombre, curp, fecha_nacimiento, genero, telefono, email, direccion, estado, municipio, localidad, codigo_postal, blood_type) VALUES
('MarÃ­a Guadalupe SÃ¡nchez LÃ³pez', 'SALM850315MNTRN01', '1985-03-15', 'Femenino', '3111234567', 'maria.sanchez@example.com', 'Av. Principal 123', 'Nayarit', 'Rosamorada', 'Centro', '63630', 'O+'),
('JosÃ© Antonio RamÃ­rez GarcÃ­a', 'RAGJ780722HNTRN02', '1978-07-22', 'Masculino', '3112345678', 'jose.ramirez@example.com', 'Calle JuÃ¡rez 45', 'Nayarit', 'Rosamorada', 'El Tamarindo', '63630', 'A+');

-- Crear algunas citas de ejemplo (usar IDs coincidentes de pacientes y mÃ©dicos previos)
INSERT INTO citas (paciente_id, medico_id, fecha, hora, motivo, estado) VALUES
(1, 1, CURDATE(), '09:00:00', 'Dolor de cabeza', 'Agendada'),
(2, 2, CURDATE(), '10:30:00', 'RevisiÃ³n pediÃ¡trica', 'Agendada');

-- Procedimientos almacenados para gestionar correo y contraseÃ±a de administradores
DELIMITER //
CREATE PROCEDURE sp_update_admin_email(IN p_admin_id INT, IN p_new_email VARCHAR(255))
BEGIN
    DECLARE v_old_email VARCHAR(255);
    IF p_new_email IS NULL OR TRIM(p_new_email) = '' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El correo no puede estar vacÃ­o.';
    END IF;
    SELECT email INTO v_old_email FROM admins WHERE id = p_admin_id;
    IF v_old_email IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Administrador no encontrado.';
    END IF;
    -- Verificar unicidad
    IF EXISTS(SELECT 1 FROM admins WHERE email = p_new_email AND id <> p_admin_id) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El correo ya estÃ¡ en uso por otro administrador.';
    END IF;
    UPDATE admins SET email = p_new_email, updated_at = CURRENT_TIMESTAMP WHERE id = p_admin_id;
    INSERT INTO admin_audit (admin_id, action, old_value, new_value) VALUES (p_admin_id, 'update_email', v_old_email, p_new_email);
END
//

CREATE PROCEDURE sp_update_admin_password(IN p_admin_id INT, IN p_new_password VARCHAR(255))
BEGIN
    DECLARE v_exists INT DEFAULT 0;
    IF p_new_password IS NULL OR TRIM(p_new_password) = '' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La contraseÃ±a no puede estar vacÃ­a.';
    END IF;
    SELECT COUNT(*) INTO v_exists FROM admins WHERE id = p_admin_id;
    IF v_exists = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Administrador no encontrado.';
    END IF;
    -- NOTA: aquÃ­ usamos SHA2 como ejemplo; preferible usar bcrypt/argon2 en la capa de aplicaciÃ³n.
    UPDATE admins SET password_hash = SHA2(p_new_password, 512), updated_at = CURRENT_TIMESTAMP WHERE id = p_admin_id;
    INSERT INTO admin_audit (admin_id, action, old_value, new_value) VALUES (p_admin_id, 'update_password', NULL, '***REDACTED***');
END
//

CREATE PROCEDURE sp_create_admin(IN p_email VARCHAR(255), IN p_password VARCHAR(255), IN p_role VARCHAR(50))
BEGIN
    IF p_email IS NULL OR TRIM(p_email) = '' OR p_password IS NULL OR TRIM(p_password) = '' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Email y contraseÃ±a requeridos.';
    END IF;
    IF EXISTS(SELECT 1 FROM admins WHERE email = p_email) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El correo ya existe.';
    END IF;
    INSERT INTO admins (email, password_hash, role) VALUES (p_email, SHA2(p_password, 512), IFNULL(p_role,'admin'));
END
//
DELIMITER ;

-- Vistas Ãºtiles
CREATE VIEW vw_agenda_por_medico AS
SELECT m.id AS medico_id, m.nombre AS medico_nombre, c.id AS cita_id, c.paciente_id, c.fecha, c.hora, c.estado
FROM citas c
LEFT JOIN medicos m ON c.medico_id = m.id;

-- Ejemplos de uso (ejecutar en cliente SQL una vez cargada la BD):
-- CALL sp_update_admin_email(1, 'nuevo_admin@dominio.com');
-- CALL sp_update_admin_password(1, 'NuevaContraSegura123!');

-- FIN del esquema
