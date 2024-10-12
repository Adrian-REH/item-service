// index.js
require('dotenv').config(); // Carga las variables de entorno
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Para manejar solicitudes JSON

// Rutas
app.use('/items', require('./src/routes/itemRoutes'));


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
