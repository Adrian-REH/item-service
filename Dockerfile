# Usar la imagen base de Node.js
FROM node:18

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar el archivo de definición de dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar todo el código fuente al contenedor
COPY . .

# Exponer el puerto en el que la app correrá
EXPOSE 3000

# Comando para iniciar la aplicación
CMD [ "node", "index.js" ]
