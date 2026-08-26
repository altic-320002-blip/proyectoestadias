# Sistema de Citas Medicas - Hospital General Rosamorada

## Stack
- **Frontend:** HTML + CSS + JavaScript (vanilla)
- **Backend:** Node.js + Express
- **Base de datos:** MySQL (XAMPP)

## Arranquerapido
1. Iniciar MySQL desde el Panel de Control de XAMPP (boton Start al lado de MySQL).
2. Importar la base de datos (solo la primera vez):
   ```
   "C:\xampp\mysql\bin\mysql.exe" -u root < hospital_citas.sql
   ```
3. Iniciar el backend:
   ```
   npm start
   ```
   Escucha en http://localhost:3001
4. Servir el frontend con cualquier servidor estatico. Recomendado: VSCode Live Server (http://127.0.0.1:5500) o:
   ```
   npx serve .
   ```

## Credenciales por defecto (definidas en hospital_citas.sql)
- **Admin:** admin@ejemplo.com / Admin123!
- **Medico:** juan.perez@hospital.local / Doctor123

## Configuracion
Edita `.env` para cambiar host/puerto/usuario/contrasena de MySQL y el puerto del backend.

## Estructura
- `index.html`, `download-cita.html` — paginas
- `css/style.css` — estilos
- `js/script.js` — logica del frontend
- `js/api.js` — cliente API (codigo del backend)
- `server.js` — codigo del backend (Express)
- `package.json` — dependencias backend
- `hospital_citas.sql` — esquema + datos semilla MySQL

## Comandos utiles
- `npm start` — arrancar backend
- `npm run dev` — arrancar backend con recarga automatica (Node 18+)
- `npm install` — instalar dependencias
