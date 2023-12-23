# Usar una imagen base de Node.js
FROM node:14

# Crear un directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar el package.json y el package-lock.json (si está disponible)
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Exponer el puerto que la aplicación usará
EXPOSE 8225

# Comando para ejecutar la aplicación
CMD [ "npm", "start" ]