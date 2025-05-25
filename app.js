const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

// Static files
app.use(express.static('public_html'));

// View engine setup
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('counter');
});

app.get('/maintain', (req, res) => {
  res.render('maintain');
});

app.get('/impressum', (req, res) => {
  res.render('impressum');
});

app.get('/privacy', (req, res) => {
  res.render('privacy');
});

// Start server
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
