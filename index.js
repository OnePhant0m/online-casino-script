// Importer Express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Route principale
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon casino en ligne ! 🚀');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en ligne sur http://localhost:${port}`);
});
