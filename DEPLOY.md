# Despliegue Sistema de Citas Médicas - Hospital General Rosamorada

## Requisitos
- Node.js 18+
- MySQL 8+
- Acceso a internet para frontend estático

## Opción A: VPS / Servidor propio
1. Sube el proyecto al servidor.
2. Copia `.env.example` a `.env` y ajusta credenciales de MySQL.
3. Importa la base de datos:
   ```bash
   mysql -u root -p < hospital_citas.sql
   ```
4. Instala dependencias:
   ```bash
   npm install
   ```
5. Inicia backend:
   ```bash
   npm start
   ```
6. Configura Nginx como proxy reverso para HTTPS.
7. En `js/config.js` pon la URL pública del backend:
   ```js
   window.API_BASE_URL = "https://tu-dominio.com/api";
   ```
8. Sirve `index.html`, `css/`, `js/` con Nginx o hosting estático.

## Opción B: PaaS
**Backend**: Railway / Render / Fly.io
- Conecta repo, define variables de entorno desde `.env.example`
- Base de datos: PlanetScale / Aiven / DigitalOcean Managed MySQL
- Dominio público con HTTPS automático

**Frontend**: Netlify / Vercel / GitHub Pages
- Sube los archivos estáticos
- Actualiza `js/config.js` con la URL del backend

### Netlify + Supabase
Para que las citas se guarden en la base de datos compartida y no solo en el navegador:

1. Ejecuta `supabase_migration.sql` en el SQL Editor de Supabase.
2. En Netlify abre **Site configuration > Environment variables** y agrega:
   - `SUPABASE_URL`: URL de tu proyecto Supabase.
   - `SUPABASE_SERVICE_ROLE_KEY`: clave **service_role** de Supabase. Solo debe existir como variable privada de Netlify.
3. En Netlify vuelve a desplegar el sitio después de guardar las variables.
4. Comprueba `https://tu-sitio.netlify.app/.netlify/functions/health` y luego registra una cita.

La clave `service_role` nunca debe escribirse en `js/config.js`, HTML, JavaScript del navegador ni subirse al repositorio.

## Seguridad
- Cambia contraseñas por defecto en `hospital_citas.sql`
- Restringe `FRONTEND_ORIGIN` en producción
- Usa HTTPS en ambos lados
- Nunca expongas `.env` al frontend

## Sincronización multi-dispositivo
- Todos los dispositivos usan la misma `API_BASE_URL`
- El polling cada 5s mantiene datos sincronizados
- Para tiempo real profesional, reemplazar polling por WebSockets
