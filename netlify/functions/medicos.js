const { supabase } = require('./_supabase');

exports.handler = async (event) => {
  const method = event.httpMethod;
  const id = event.path.split('/').pop();
  
  try {
    if (method === 'GET') {
      if (id && id !== 'medicos') {
        const { data, error } = await supabase.from('medicos').select('id, nombre, area, telefono, email, dias_trabaja, hora_entrada, hora_salida').eq('id', id).single();
        if (error) throw error;
        return { statusCode: 200, body: JSON.stringify(data) };
      }
      const { data, error } = await supabase.from('medicos').select('id, nombre, area, telefono, email, dias_trabaja, hora_entrada, hora_salida').order('nombre');
      if (error) throw error;
      return { statusCode: 200, body: JSON.stringify(data) };
    }
    
    if (method === 'POST') {
      const body = JSON.parse(event.body);
      const { data, error } = await supabase.from('medicos').insert(body).select('id, nombre, area, telefono, email, dias_trabaja, hora_entrada, hora_salida').single();
      if (error) throw error;
      return { statusCode: 201, body: JSON.stringify(data) };
    }
    
    if (method === 'PUT') {
      const body = JSON.parse(event.body);
      const { data, error } = await supabase.from('medicos').update(body).eq('id', id).select('id, nombre, area, telefono, email, dias_trabaja, hora_entrada, hora_salida').single();
      if (error) throw error;
      return { statusCode: 200, body: JSON.stringify(data) };
    }
    
    if (method === 'DELETE') {
      const { error } = await supabase.from('medicos').delete().eq('id', id);
      if (error) throw error;
      return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    }
    
    return { statusCode: 405, body: 'Method Not Allowed' };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
