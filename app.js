const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

// Statische Dateien (CSS, Bilder etc.)
app.use(express.static('static'));

// Handlebars als Template Engine einrichten
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
// wenn zum Beispiel res.render("counter") aufgeruft wird dann sucht Express autoatisch nach counter.handlebars
// (ohne Dateiendung angeben zu müssen)
app.set('view engine', 'handlebars'); 
app.set('views', path.join(__dirname, 'views'));

// maintain-Route
app.get('/maintain', (req, res) => {
  res.render('maintain', {
    example: {
      age: 25,
      height: 175,
      weight: 70,
      gender: 'Männlich',
      activity: 'Normal aktiv',
      result: 2594
    }
  });
});

// temporär (später durch DB)
let totalCalories = 0;
let recentItems = [];

// gibt counter als Startseite / an
app.get('/', (req, res) => {
  res.render('counter', { 
    recentItems
  });
});

// API-Route für neue Essen-Einträge
app.post('/api/add-food', express.json(), (req, res) => {
  const { food } = req.body; //das Gleiche wie: const food = req.body.food;
  
  // Simuliere Kalorienberechnung
  const calories = 100; // Später durch echte Logik ersetzen
  totalCalories += calories;

  // Füge den Eintrag zur Liste "recentItems" hinzu
  recentItems.push({ name: food, calories });
  
  // response an den Client
  res.json({
    totalCalories,
    recentItems,
    aiText: "Simulierte KI-Antwort" // Später ersetzen
  });
});

// impressum-Route
app.get('/impressum', (req, res) => {
  res.render('impressum');
});

// Privacy-Route
app.get('/privacy', (req, res) => {
  res.render('privacy');
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
