// Importar las bibliotecas necesarias
const express = require("express");
const fs = require("fs");
const cron = require("node-cron");


// Crear una instancia de la aplicación Express
const app = express();

// Definir el puerto en el que se ejecutará el servidor, utilizando el puerto 3000 si no se especifica
const PORT = process.env.PORT || 3005;


// Programar una tarea para actualizar los datos cada 2h
cron.schedule("0 */2 * * *", async () => {
  try {
    console.log("Actualizando datos...");
   
  } catch (error) {
    console.error("Error al actualizar los datos:", error);
  }
});

// Configurar una ruta para obtener los datos almacenados en el archivo JSON
app.get("/init", async (req, res) => {
  console.log("hola ");
  res.json({data:"hola"});
});






// Iniciar el servidor Express en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
