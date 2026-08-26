const { supabase } = require('./_supabase');

exports.handler = async (event) => {
  const method = event.httpMethod;
  const id = event.path.split('/').pop();
  
  try {
    if (method === 'GET') {
      const { data, error } = await supabase.from('admins').select('id, email, role, is_active, created_at, last_login').order('id');
      if (error) throw error;
      return { statusCode: 200, body: JSON.stringify(data) };
    }
    
    if (method === 'POST') {
      const body = JSON.parse(event.body);
      const { data, error } = await supabase.from('admins').insert(body).select('id, email, role').single();
      if (error) throw error;
      return { statusCode: 201, body: JSON.stringify(data) };
    }
    
    if (method === 'DELETE') {
      const { error } = await supabase.from('admins').delete().eq('id', id);
      if (error) throw error;
      return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    }
    
    return { statusCode: 405, body: 'Method Not Allowed' };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
