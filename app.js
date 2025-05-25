const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Statische Dateien aus public_html
app.use(express.static('public_html'));

// Startseite
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public_html', `counter.html`));
});

// Redirect für /maintain → /maintain.html
app.get('/maintain', (req, res) => {
  res.redirect('/maintain.html');
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
