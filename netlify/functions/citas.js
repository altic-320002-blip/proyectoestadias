const { supabase } = require('./_supabase');

exports.handler = async (event) => {
  const method = event.httpMethod;
  const id = event.path.split('/').pop();
  
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
      return { statusCode: 200, body: JSON.stringify(mapped) };
    }
    
    if (method === 'POST') {
      const body = JSON.parse(event.body);
      const { data, error } = await supabase.from('citas').insert(body).select().single();
      if (error) throw error;
      return { statusCode: 201, body: JSON.stringify(data) };
    }
    
    if (method === 'PUT') {
      const body = JSON.parse(event.body);
      const { data, error } = await supabase.from('citas').update(body).eq('id', id).select().single();
      if (error) throw error;
      return { statusCode: 200, body: JSON.stringify(data) };
    }
    
    if (method === 'DELETE') {
      const { error } = await supabase.from('citas').delete().eq('id', id);
      if (error) throw error;
      return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    }
    
    return { statusCode: 405, body: 'Method Not Allowed' };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
