const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

// Statische Dateien (CSS, Bilder etc.)
app.use(express.static('public_html'));

// Handlebars als Template Engine einrichten
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Routen
app.get('/', (req, res) => {
  res.render('counter'); // Startseite
});

app.get('/impressum', (req, res) => {
  res.render('impressum');
});

app.get('/privacy', (req, res) => {
  res.render('privacy');
});

app.get('/maintain', (req, res) => {
  res.render('maintain', {
    example: {
      age: 25,
      height: 175,
      weight: 70,
      gender: 'Männlich',
      activity: 'Normal aktiv',
      result: 2500
    }
  });
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
