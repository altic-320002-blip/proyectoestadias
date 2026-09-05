-- Migración Supabase para Hospital Citas
-- Ejecutar en SQL Editor de Supabase

-- Habilitar extensiones
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabla admins
CREATE TABLE IF NOT EXISTS admins (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'admin',
    is_active BOOLEAN NOT NULL DEFAULT true,
    medico_id INT NULL REFERENCES medicos(id) ON DELETE SET NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL
);

-- Tabla pacientes
CREATE TABLE IF NOT EXISTS pacientes (
    id SERIAL PRIMARY KEY,
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
    UNIQUE(email)
);

-- Tabla medicos
CREATE TABLE IF NOT EXISTS medicos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    area VARCHAR(150),
    telefono VARCHAR(30),
    email VARCHAR(255),
    password_hash VARCHAR(255),
    dias_trabaja VARCHAR(10) NOT NULL DEFAULT 'L-V',
    hora_entrada TIME NOT NULL DEFAULT '08:00:00',
    hora_salida TIME NOT NULL DEFAULT '18:00:00',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(email)
);

-- Tabla citas
CREATE TABLE IF NOT EXISTS citas (
    id SERIAL PRIMARY KEY,
    paciente_id INT NOT NULL REFERENCES pacientes(id) ON DELETE CASCADE,
    medico_id INT REFERENCES medicos(id) ON DELETE SET NULL,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    motivo TEXT,
    estado VARCHAR(20) NOT NULL DEFAULT 'Agendada',
    creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    actualizado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_citas_fecha ON citas(fecha);
CREATE INDEX IF NOT EXISTS idx_citas_estado ON citas(estado);
CREATE INDEX IF NOT EXISTS idx_medicos_area ON medicos(area);

-- Admin por defecto
INSERT INTO admins (email, password_hash, role)
VALUES ('admin@ejemplo.com', encode(sha2('Admin123!', 512)::bytea, 'hex'), 'superadmin')
ON CONFLICT (email) DO NOTHING;

-- Habilitar RLS
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;
ALTER TABLE pacientes ENABLE ROW LEVEL SECURITY;
ALTER TABLE medicos ENABLE ROW LEVEL SECURITY;
ALTER TABLE citas ENABLE ROW LEVEL SECURITY;

-- Políticas abiertas para simplificar - ajustar en producción
CREATE POLICY "allow all" ON admins FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "allow all" ON pacientes FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "allow all" ON medicos FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "allow all" ON citas FOR ALL USING (true) WITH CHECK (true);
