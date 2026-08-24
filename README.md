# Sistema de Citas Médicas - Hospital General Rosamorada

Frontend vanilla HTML/CSS/JS + Backend Node.js Express + MySQL XAMPP

## Arranque rápido
1. Iniciar MySQL en XAMPP
2. Importar base de datos:
   ```
   "C:\xampp\mysql\bin\mysql.exe" -u root < hospital_citas.sql
   ```
3. Backend:
   ```
   npm install
   npm start
   ```
   Escucha en http://localhost:3001
4. Frontend: abre `index.html` con Live Server o `npx serve .`

## Credenciales por defecto
- Admin: admin@ejemplo.com / Admin123!
- Médico: juan.perez@hospital.local / Doctor123

## Estructura
- `index.html`, `download-cita.html`
- `css/style.css`
- `js/script.js`, `js/api.js`
- `server.js`
- `hospital_citas.sql`

## Notas
- Número de expediente se genera automáticamente correlativo
- Filtrado de médicos por día y validación anti-duplicados de citas activas
