# Usa una imagen ligera de Python
FROM python:3.9-slim

WORKDIR /app

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    libpq-dev gcc \
    && rm -rf /var/lib/apt/lists/*

# Copiar e instalar dependencias de Python
COPY requirements.txt .  
RUN pip install --no-cache-dir -r requirements.txt  

# Copiar el código fuente al contenedor
COPY . .

# Exponer el puerto donde correrá Django
EXPOSE 8000

# Comando para correr el servidor de Django
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
