// Cliente API para el backend Node.js + Express + MySQL
// Todos los endpoints asumen que el backend corre en http://localhost:3001
// Si el backend no responde, las funciones lanzan un error que el caller puede capturar
// y caer al localStorage (modo offline / legacy).

const API_BASE = (typeof window !== 'undefined' && window.API_BASE_URL) ? window.API_BASE_URL : "http://localhost:3001/api";

async function apiRequest(path, options = {}) {
    const opts = Object.assign(
        { headers: { "Content-Type": "application/json" }, mode: "cors" },
        options
    );
    if (opts.body && typeof opts.body !== "string") {
        opts.body = JSON.stringify(opts.body);
    }
    const res = await fetch(`${API_BASE}${path}`, opts);
    let data = null;
    try { data = await res.json(); } catch (_) { /* ignore */ }
    if (!res.ok) {
        const err = new Error((data && data.error) || `Error HTTP ${res.status}`);
        err.status = res.status;
        err.data = data;
        throw err;
    }
    return data;
}

// ====== LOGIN ======
async function apiLogin(email, password) {
    return apiRequest("/login", { method: "POST", body: { email, password } });
}

// ====== PACIENTES ======
async function apiGetPacientes() { return apiRequest("/pacientes"); }
async function apiCreatePaciente(p) { return apiRequest("/pacientes", { method: "POST", body: p }); }
async function apiUpdatePaciente(id, p) { return apiRequest(`/pacientes/${id}`, { method: "PUT", body: p }); }
async function apiDeletePaciente(id) { return apiRequest(`/pacientes/${id}`, { method: "DELETE" }); }

// ====== MEDICOS ======
async function apiGetMedicos() { return apiRequest("/medicos"); }
async function apiCreateMedico(d) { return apiRequest("/medicos", { method: "POST", body: d }); }
async function apiUpdateMedico(id, d) { return apiRequest(`/medicos/${id}`, { method: "PUT", body: d }); }
async function apiDeleteMedico(id) { return apiRequest(`/medicos/${id}`, { method: "DELETE" }); }

// ====== CITAS ======
async function apiGetCitas() { return apiRequest("/citas"); }
async function apiCreateCita(c) { return apiRequest("/citas", { method: "POST", body: c }); }
async function apiUpdateCita(id, c) { return apiRequest(`/citas/${id}`, { method: "PUT", body: c }); }
async function apiDeleteCita(id) { return apiRequest(`/citas/${id}`, { method: "DELETE" }); }

// ====== ADMINS ======
async function apiGetAdmins() { return apiRequest("/admins"); }
async function apiCreateAdmin(a) { return apiRequest("/admins", { method: "POST", body: a }); }
async function apiDeleteAdmin(id) { return apiRequest(`/admins/${id}`, { method: "DELETE" }); }

// ====== HEALTH CHECK ======
async function apiHealth() {
    try { await apiRequest("/health"); return true; } catch (_) { return false; }
}
