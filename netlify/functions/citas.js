const { supabase } = require('./_supabase');

exports.handler = async (event) => {
  const method = event.httpMethod;
  const id = event.path.split('/').pop();
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Content-Type': 'application/json'
  };
  if (method === 'OPTIONS') return { statusCode: 200, headers };
  try {
    if (method === 'GET') {
      const { data, error } = await supabase.from('citas').select('*, pacientes(nombre, curp), medicos(nombre, area)').order('fecha', { ascending: false });
      if (error) throw error;
      const mapped = data.map(c => ({
        id: c.id,
        paciente_id: c.paciente_id,
        medico_id: c.medico_id,
        fecha: c.fecha,
        hora: c.hora,
        motivo: c.motivo,
        estado: c.estado,
        paciente_nombre: c.pacientes?.nombre,
        paciente_curp: c.pacientes?.curp,
        medico_nombre: c.medicos?.nombre,
        medico_area: c.medicos?.area
      }));
      return { statusCode: 200, headers, body: JSON.stringify(mapped) };
    }
    
    if (method === 'POST') {
      const body = JSON.parse(event.body || '{}');
      if (!body.paciente_id || !body.fecha || !body.hora) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Faltan paciente_id, fecha u hora' }) };
      }
      const { data, error } = await supabase.from('citas').insert(body).select().single();
      if (error) throw error;
      return { statusCode: 201, headers, body: JSON.stringify(data) };
    }
    
    if (method === 'PUT') {
      const body = JSON.parse(event.body);
      const { data, error } = await supabase.from('citas').update(body).eq('id', id).select().single();
      if (error) throw error;
      return { statusCode: 200, headers, body: JSON.stringify(data) };
    }
    
    if (method === 'DELETE') {
      const { error } = await supabase.from('citas').delete().eq('id', id);
      if (error) throw error;
      return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
    }
    
    return { statusCode: 405, headers, body: 'Method Not Allowed' };
  } catch (e) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: e.message }) };
  }
};
