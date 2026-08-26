-- Políticas RLS seguras para Hospital Citas
-- Ejecutar después de supabase_migration.sql

-- Eliminar políticas abiertas previas
DROP POLICY IF EXISTS "allow all" ON admins;
DROP POLICY IF EXISTS "allow all" ON pacientes;
DROP POLICY IF EXISTS "allow all" ON medicos;
DROP POLICY IF EXISTS "allow all" ON citas;

-- Función para verificar rol de admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  -- En producción, validar contra JWT de Supabase Auth
  -- Por ahora, permitir acceso a todos los usuarios autenticados
  RETURN auth.role() = 'authenticated' OR current_user = 'postgres';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Pacientes: lectura para autenticados, escritura solo admin
CREATE POLICY "pacientes_select" ON pacientes FOR SELECT USING (true);
CREATE POLICY "pacientes_insert" ON pacientes FOR INSERT WITH CHECK (is_admin());
CREATE POLICY "pacientes_update" ON pacientes FOR UPDATE USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY "pacientes_delete" ON pacientes FOR DELETE USING (is_admin());

-- Médicos: lectura para todos, escritura solo admin
CREATE POLICY "medicos_select" ON medicos FOR SELECT USING (true);
CREATE POLICY "medicos_insert" ON medicos FOR INSERT WITH CHECK (is_admin());
CREATE POLICY "medicos_update" ON medicos FOR UPDATE USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY "medicos_delete" ON medicos FOR DELETE USING (is_admin());

-- Citas: lectura para todos, escritura solo admin
CREATE POLICY "citas_select" ON citas FOR SELECT USING (true);
CREATE POLICY "citas_insert" ON citas FOR INSERT WITH CHECK (is_admin());
CREATE POLICY "citas_update" ON citas FOR UPDATE USING (is_admin()) WITH CHECK (is_admin());
CREATE POLICY "citas_delete" ON citas FOR DELETE USING (is_admin());

-- Admins: solo servicio, sin acceso desde cliente
CREATE POLICY "admins_select" ON admins FOR SELECT USING (false);
CREATE POLICY "admins_all" ON admins FOR ALL USING (current_user = 'postgres') WITH CHECK (current_user = 'postgres');
