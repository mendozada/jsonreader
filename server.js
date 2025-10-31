// ====== Importar módulos ======
const express = require('express');
const fs = require('fs');
const path = require('path');

// ====== Inicializar Express ======
const app = express();
const PORT = 3000;

// ====== Endpoint para leer el JSON local ======
app.get('/data', (req, res) => {
  const filePath = path.join(__dirname, 'data.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo JSON:', err);
      return res.status(500).json({ error: 'No se pudo leer el archivo JSON' });
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error('Error al parsear JSON:', parseError);
      res.status(500).json({ error: 'Archivo JSON inválido' });
    }
  });
});


 app.get('/pelis', (req, res) => {
   const filePath = path.join(__dirname, 'peliculas.json');  

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo JSON:', err);
      return res.status(500).json({ error: 'No se pudo leer el archivo JSON' });
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error('Error al parsear JSON:', parseError);
      res.status(500).json({ error: 'Archivo JSON inválido' });
    }
  });
});


 app.get('/medicos', (req, res) => {
   const filePath = path.join(__dirname, 'medicos.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo JSON:', err);
      return res.status(500).json({ error: 'No se pudo leer el archivo JSON' });
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error('Error al parsear JSON:', parseError);
      res.status(500).json({ error: 'Archivo JSON inválido' });
    }
  });
});

app.get('/ingredientes', (req, res) => {
   const filePath = path.join(__dirname, 'ingredientes.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo JSON:', err);
      return res.status(500).json({ error: 'No se pudo leer el archivo JSON' });
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error('Error al parsear JSON:', parseError);
      res.status(500).json({ error: 'Archivo JSON inválido' });
    }
  });
});

app.get('/horoscopo', (req, res) => {
   const filePath = path.join(__dirname, 'horoscopo.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo JSON:', err);
      return res.status(500).json({ error: 'No se pudo leer el archivo JSON' });
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error('Error al parsear JSON:', parseError);
      res.status(500).json({ error: 'Archivo JSON inválido' });
    }
  });
});

// ====== Iniciar servidor ======
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
