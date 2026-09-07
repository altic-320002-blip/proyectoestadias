const { supabase } = require('./_supabase');

 exports.handler = async (event, context) => {
   const method = event.httpMethod;
   const id = event.path.split('/').pop();
   const headers = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS' };
   if (method === 'OPTIONS') return { statusCode: 200, headers };
   try {
     if (method === 'GET') {
      if (id && id !== 'pacientes') {
        const { data, error } = await supabase.from('pacientes').select('*').eq('id', id).single();
        if (error) throw error;
        return { statusCode: 200, headers, body: JSON.stringify(data) };
      }
      const { data, error } = await supabase.from('pacientes').select('*').order('id');
      if (error) throw error;
      return { statusCode: 200, headers, body: JSON.stringify(data) };
    }
    
    if (method === 'POST') {
      const body = JSON.parse(event.body);
      const { data, error } = await supabase.from('pacientes').insert(body).select().single();
      if (error) throw error;
      return { statusCode: 201, headers, body: JSON.stringify(data) };
    }
    
    if (method === 'PUT') {
      const body = JSON.parse(event.body);
      const { data, error } = await supabase.from('pacientes').update(body).eq('id', id).select().single();
      if (error) throw error;
      return { statusCode: 200, headers, body: JSON.stringify(data) };
    }
    
    if (method === 'DELETE') {
      const { error } = await supabase.from('pacientes').delete().eq('id', id);
      if (error) throw error;
      return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
    }
    
    return { statusCode: 405, headers, body: 'Method Not Allowed' };
  } catch (e) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: e.message }) };
  }
};
