const { supabase } = require('./_supabase');

 exports.handler = async (event) => {
   const method = event.httpMethod;
   const id = event.path.split('/').pop();
   
   try {
     if (method === 'GET') {
       const { data, error } = await supabase.from('admins').select('id, email, role, is_active, created_at, last_login, medico_id, medicos!admins_medico_id_fkey(nombre)').order('id');
       if (error) throw error;
       const transformed = data.map(a => ({
         id: a.id,
         email: a.email,
         role: a.role,
         is_active: a.is_active,
         created_at: a.created_at,
         last_login: a.last_login,
         medico_id: a.medico_id,
         medico_nombre: a.medicos?.nombre || null
       }));
       return { statusCode: 200, body: JSON.stringify(transformed) };
     }
     
     if (method === 'POST') {
       const body = JSON.parse(event.body);
       if (body.medico_id) {
         const { data: med, error: medErr } = await supabase.from('medicos').select('id, email').eq('id', body.medico_id).single();
         if (medErr) throw medErr;
         if (!med.email) return { statusCode: 400, body: JSON.stringify({ error: 'El médico no tiene correo registrado' }) };
         const { data: exists, error: existsErr } = await supabase.from('admins').select('id').eq('medico_id', body.medico_id).maybeSingle();
         if (existsErr) throw existsErr;
         if (exists) return { statusCode: 409, body: JSON.stringify({ error: 'Este médico ya tiene una cuenta de acceso' }) };
         const { data: emailExists } = await supabase.from('admins').select('id').eq('email', med.email.toLowerCase()).maybeSingle();
         if (emailExists) return { statusCode: 409, body: JSON.stringify({ error: 'Ya existe un admin con ese correo' }) };
         // Hash password similar to server.js using SHA-512 via crypto
         const crypto = require('crypto');
         const password_hash = crypto.createHash('sha512').update(body.password).digest('hex');
         const payload = {
           email: med.email.toLowerCase(),
           password_hash,
           role: body.role || 'admin',
           medico_id: body.medico_id
         };
         const { data, error } = await supabase.from('admins').insert(payload).select('id, email, role, medico_id').single();
         if (error) throw error;
         return { statusCode: 201, body: JSON.stringify(data) };
       }
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
