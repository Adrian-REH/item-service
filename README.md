# Deploy Service Item

## Dockerfile
```Docker

```
## Create Image
```bash
docker build -t itemService .
```
## Run and redirect port
```bash
docker run -p 3000:3000 itemService

```
# Implement Controller / Service / Models
## Service GetByIdItem

## Service SaveItem
## Service UpdateByIdItem
## Service DeleteByIdItem

# CRUD : 
## GET_ITEM

## POST_ITEM
## DELETE_ITEM
## UPDATE_ITEM

# Arquitectura hexagonal
```bash
project-root/
│
├── src/
│   ├── controllers/        # Controladores HTTP
│   ├── services/           # Casos de uso / Lógica de negocio
│   ├── repositories/       # Acceso a datos
│   ├── models/             # Modelos de datos (por ejemplo, Mongoose o Sequelize)
│   ├── routes/             # Rutas de Express
│   └── config/             # Configuraciones (base de datos, env variables)
│
├── tests/                  # Pruebas unitarias
├── .env                    # Variables de entorno
├── index.js                # Punto de entrada de la aplicación
├── package.json            # Definiciones del proyecto
└── README.md               # Descripción del proyecto

```
# Install dependenci

# Init Node: ServiceItem

```bash
npm init -y

npm install express

#npm install dotenv

#npm install --save-dev nodemon jest

```