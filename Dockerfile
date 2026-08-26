FROM node:20-alpine

WORKDIR /app

# Copiar dependencias
COPY package*.json ./
RUN npm install --production

# Copiar código
COPY . .

# Puerto del backend
EXPOSE 3001

# Variables por defecto, sobrescribir con --env en producción
ENV PORT=3001
ENV DB_HOST=localhost
ENV DB_PORT=3306
ENV DB_USER=root
ENV DB_PASSWORD=
ENV DB_NAME=hospital_citas
ENV FRONTEND_ORIGIN=*

CMD ["node", "server.js"]
