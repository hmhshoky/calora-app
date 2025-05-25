const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.engine('handlebars', exphbs.create().engine);
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.use(express.static('public_html'));

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

app.get('/meals', (req, res) => {
  const meals = [
    { name: 'Spaghetti', kcal: 500 },
    { name: 'Salad', kcal: 150 },
    { name: 'Pizza', kcal: 800 }
  ];

  res.render('meals', { meals });
});
