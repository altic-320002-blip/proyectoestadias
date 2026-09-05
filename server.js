require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_ORIGIN || "*" }));

// Pool de conexiones a MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "hospital_citas",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  dateStrings: true
});

// ===== Middleware de errores de BD =====
function handleError(res, err, msg = "Error en el servidor") {
  console.error("DB error:", err.message);
  res.status(500).json({ error: msg, detalle: err.message });
}

// ===================== LOGIN =====================
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) return res.status(400).json({ error: "Faltan credenciales" });
    // 1. Buscar en admins (contrasena almacenada como SHA2-512)
    const [admins] = await pool.query(
      "SELECT id, email, role FROM admins WHERE email = LOWER(?) AND password_hash = SHA2(?, 512)",
      [email.trim().toLowerCase(), password]
    );
    if (admins.length) return res.json({ role: "admin", user: admins[0] });
    // 2. Buscar en medicos
    const [docs] = await pool.query(
      "SELECT id, nombre, area, email FROM medicos WHERE email = LOWER(?) AND password_hash = SHA2(?, 512)",
      [email.trim().toLowerCase(), password]
    );
    if (docs.length) return res.json({ role: "doctor", user: docs[0] });
    return res.status(401).json({ error: "Correo o contrasena incorrectos" });
  } catch (e) { handleError(res, e, "No se pudo iniciar sesion"); }
});

// ===================== PACIENTES =====================
app.get("/api/pacientes", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM pacientes ORDER BY id");
    res.json(rows);
  } catch (e) { handleError(res, e, "No se pudieron obtener pacientes"); }
});

app.get("/api/pacientes/:id", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM pacientes WHERE id = ?", [req.params.id]);
    if (!rows.length) return res.status(404).json({ error: "Paciente no encontrado" });
    res.json(rows[0]);
  } catch (e) { handleError(res, e, "No se pudo obtener el paciente"); }
});

app.post("/api/pacientes", async (req, res) => {
  try {
    const p = req.body || {};
    if (!p.nombre || !p.curp) return res.status(400).json({ error: "Nombre y CURP son obligatorios" });
    const [exists] = await pool.query("SELECT id FROM pacientes WHERE curp = ?", [p.curp.toUpperCase()]);
    if (exists.length) return res.status(409).json({ error: "Ya existe un paciente con esa CURP" });
    const [result] = await pool.query(
      `INSERT INTO pacientes (nombre, curp, fecha_nacimiento, genero, telefono, email, direccion, estado, municipio, localidad, codigo_postal, blood_type)
       VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`,
      [p.nombre, p.curp.toUpperCase(), p.fecha_nacimiento, p.genero, p.telefono, p.email, p.direccion, p.estado, p.municipio, p.localidad, p.codigo_postal, p.blood_type]
    );
    const [rows] = await pool.query("SELECT * FROM pacientes WHERE id = ?", [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (e) { handleError(res, e, "No se pudo crear el paciente"); }
});

app.put("/api/pacientes/:id", async (req, res) => {
  try {
    const p = req.body || {};
    await pool.query(
      `UPDATE pacientes SET nombre=?, curp=?, fecha_nacimiento=?, genero=?, telefono=?, email=?, direccion=?, estado=?, municipio=?, localidad=?, codigo_postal=?, blood_type=? WHERE id=?`,
      [p.nombre, p.curp, p.fecha_nacimiento, p.genero, p.telefono, p.email, p.direccion, p.estado, p.municipio, p.localidad, p.codigo_postal, p.blood_type, req.params.id]
    );
    const [rows] = await pool.query("SELECT * FROM pacientes WHERE id = ?", [req.params.id]);
    res.json(rows[0]);
  } catch (e) { handleError(res, e, "No se pudo actualizar el paciente"); }
});

app.delete("/api/pacientes/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM pacientes WHERE id = ?", [req.params.id]);
    res.json({ ok: true });
  } catch (e) { handleError(res, e, "No se pudo eliminar el paciente"); }
});

// ===================== MEDICOS =====================
app.get("/api/medicos", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT id, nombre, area, telefono, email FROM medicos ORDER BY nombre");
    res.json(rows);
  } catch (e) { handleError(res, e, "No se pudieron obtener medicos"); }
});

app.get("/api/medicos/disponibles-para-acceso", async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT m.id, m.nombre, m.email
      FROM medicos m
      LEFT JOIN admins a ON a.medico_id = m.id
      WHERE m.email IS NOT NULL AND a.id IS NULL
      ORDER BY m.nombre
    `);
    res.json(rows);
  } catch (e) { handleError(res, e, "No se pudieron obtener medicos disponibles"); }
});

app.post("/api/medicos", async (req, res) => {
  try {
    const d = req.body || {};
    if (!d.nombre) return res.status(400).json({ error: "El nombre es obligatorio" });
    const diasTrabaja = d.dias_trabaja || 'L-V';
    if (diasTrabaja !== 'L-V' && diasTrabaja !== 'S-D') {
      return res.status(400).json({ error: "dias_trabaja debe ser 'L-V' o 'S-D'" });
    }
    const horaEntrada = d.hora_entrada || '08:00:00';
    const horaSalida = d.hora_salida || '18:00:00';
    const [result] = await pool.query(
      "INSERT INTO medicos (nombre, area, telefono, email, password_hash, dias_trabaja, hora_entrada, hora_salida) VALUES (?,?,?,?,SHA2(?,512),?,?,?)",
      [d.nombre, d.area, d.telefono, d.email ? d.email.toLowerCase() : null, d.password || "Doctor123", diasTrabaja, horaEntrada, horaSalida]
    );
    const [rows] = await pool.query("SELECT id, nombre, area, telefono, email, dias_trabaja, hora_entrada, hora_salida FROM medicos WHERE id = ?", [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (e) { handleError(res, e, "No se pudo crear el medico"); }
});

app.put("/api/medicos/:id", async (req, res) => {
  try {
    const d = req.body || {};
    if (d.password) {
      await pool.query("UPDATE medicos SET nombre=?, area=?, telefono=?, email=?, password_hash=SHA2(?,512), dias_trabaja=?, hora_entrada=?, hora_salida=? WHERE id=?",
        [d.nombre, d.area, d.telefono, d.email, d.password, d.dias_trabaja, d.hora_entrada, d.hora_salida, req.params.id]);
    } else {
      await pool.query("UPDATE medicos SET nombre=?, area=?, telefono=?, email=?, dias_trabaja=?, hora_entrada=?, hora_salida=? WHERE id=?",
        [d.nombre, d.area, d.telefono, d.email, d.dias_trabaja, d.hora_entrada, d.hora_salida, req.params.id]);
    }
    const [rows] = await pool.query("SELECT id, nombre, area, telefono, email, dias_trabaja, hora_entrada, hora_salida FROM medicos WHERE id = ?", [req.params.id]);
    res.json(rows[0]);
  } catch (e) { handleError(res, e, "No se pudo actualizar el medico"); }
});

app.delete("/api/medicos/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM medicos WHERE id = ?", [req.params.id]);
    res.json({ ok: true });
  } catch (e) { handleError(res, e, "No se pudo eliminar el medico"); }
});

// ===================== CITAS =====================
app.get("/api/citas", async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT c.id, c.paciente_id, c.medico_id, c.fecha, c.hora, c.motivo, c.estado,
             pac.nombre AS paciente_nombre, pac.curp AS paciente_curp,
             med.nombre AS medico_nombre, med.area AS medico_area
      FROM citas c
      LEFT JOIN pacientes pac ON c.paciente_id = pac.id
      LEFT JOIN medicos med ON c.medico_id = med.id
      ORDER BY c.fecha DESC, c.hora DESC
    `);
    res.json(rows);
  } catch (e) { handleError(res, e, "No se pudieron obtener las citas"); }
});

app.post("/api/citas", async (req, res) => {
  try {
    const c = req.body || {};
    if (!c.paciente_id || !c.fecha || !c.hora) return res.status(400).json({ error: "Faltan campos obligatorios" });
    const [result] = await pool.query(
      "INSERT INTO citas (paciente_id, medico_id, fecha, hora, motivo, estado) VALUES (?,?,?,?,?,?)",
      [c.paciente_id, c.medico_id, c.fecha, c.hora, c.motivo, c.estado || "Agendada"]
    );
    const [rows] = await pool.query("SELECT * FROM citas WHERE id = ?", [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (e) { handleError(res, e, "No se pudo crear la cita"); }
});

app.put("/api/citas/:id", async (req, res) => {
  try {
    const c = req.body || {};
    await pool.query(
      "UPDATE citas SET paciente_id=?, medico_id=?, fecha=?, hora=?, motivo=?, estado=? WHERE id=?",
      [c.paciente_id, c.medico_id, c.fecha, c.hora, c.motivo, c.estado, req.params.id]
    );
    const [rows] = await pool.query("SELECT * FROM citas WHERE id = ?", [req.params.id]);
    res.json(rows[0]);
  } catch (e) { handleError(res, e, "No se pudo actualizar la cita"); }
});

app.delete("/api/citas/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM citas WHERE id = ?", [req.params.id]);
    res.json({ ok: true });
  } catch (e) { handleError(res, e, "No se pudo eliminar la cita"); }
});

// ===================== ADMINS =====================
app.get("/api/admins", async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT a.id, a.email, a.role, a.is_active, a.created_at, a.last_login, a.medico_id, m.nombre AS medico_nombre
      FROM admins a
      LEFT JOIN medicos m ON a.medico_id = m.id
      ORDER BY a.id
    `);
    res.json(rows);
  } catch (e) { handleError(res, e, "No se pudieron obtener los admins"); }
});

app.post("/api/admins", async (req, res) => {
  try {
    const a = req.body || {};
    // Nuevo flujo: crear admin a partir de medico_id
    if (a.medico_id && a.password) {
      const [meds] = await pool.query("SELECT id, email FROM medicos WHERE id = ?", [a.medico_id]);
      if (!meds.length) return res.status(404).json({ error: "Médico no encontrado" });
      const medico = meds[0];
      if (!medico.email) return res.status(400).json({ error: "El médico no tiene correo registrado" });
      const [existsAdmin] = await pool.query("SELECT id FROM admins WHERE medico_id = ?", [a.medico_id]);
      if (existsAdmin.length) return res.status(409).json({ error: "Este médico ya tiene una cuenta de acceso" });
      const [existsEmail] = await pool.query("SELECT id FROM admins WHERE email = ?", [medico.email.toLowerCase()]);
      if (existsEmail.length) return res.status(409).json({ error: "Ya existe un admin con ese correo" });
      const [result] = await pool.query(
        "INSERT INTO admins (email, password_hash, role, medico_id) VALUES (?,?,?,?)",
        [medico.email.toLowerCase(), "", a.role || "admin", a.medico_id]
      );
      await pool.query("UPDATE admins SET password_hash = SHA2(?,512) WHERE id = ?", [a.password, result.insertId]);
      const [rows] = await pool.query("SELECT id, email, role, medico_id FROM admins WHERE id = ?", [result.insertId]);
      return res.status(201).json(rows[0]);
    }
    // Flujo legacy por email
    if (!a.email || !a.password) return res.status(400).json({ error: "Email y contrasena obligatorios" });
    const [exists] = await pool.query("SELECT id FROM admins WHERE email = ?", [a.email.toLowerCase()]);
    if (exists.length) return res.status(409).json({ error: "Ya existe un admin con ese correo" });
    const [result] = await pool.query(
      "INSERT INTO admins (email, password_hash, role) VALUES (?,?,?)",
      [a.email.toLowerCase(), "", a.role || "admin"]
    );
    await pool.query("UPDATE admins SET password_hash = SHA2(?,512) WHERE id = ?", [a.password, result.insertId]);
    const [rows] = await pool.query("SELECT id, email, role FROM admins WHERE id = ?", [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (e) { handleError(res, e, "No se pudo crear el admin"); }
});

app.delete("/api/admins/:id", async (req, res) => {
  try {
    const [count] = await pool.query("SELECT COUNT(*) AS n FROM admins");
    if (count[0].n <= 1) return res.status(400).json({ error: "Debe existir al menos un administrador" });
    await pool.query("DELETE FROM admins WHERE id = ?", [req.params.id]);
    res.json({ ok: true });
  } catch (e) { handleError(res, e, "No se pudo eliminar el admin"); }
});

// ===================== SALUD =====================
app.get("/api/health", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 AS ok");
    res.json({ status: "ok", db: rows[0].ok === 1 });
  } catch (e) { handleError(res, e, "No hay conexion con la BD"); }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend Hospital escuchando en http://localhost:${PORT}`);
});
