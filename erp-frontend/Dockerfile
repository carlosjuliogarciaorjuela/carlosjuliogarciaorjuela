# Usa una versión estable de Node.js en Alpine
FROM node:20-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo package.json y package-lock.json para aprovechar la caché de Docker
COPY package*.json ./

RUN npm install

# Copia el resto del código después de instalar dependencias
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Establece el comando por defecto
CMD ["npm", "run", "dev"]
