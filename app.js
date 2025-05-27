const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

// Statische Dateien (CSS, Bilder etc.)
app.use(express.static('static'));

// Handlebars als Template Engine einrichten
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Routen
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

// --- Temporärer Datenspeicher (später durch DB ersetzen) ---
let totalCalories = 0;
let recentItems = [];

// --- Route für die Startseite ---
app.get('/', (req, res) => {
  res.render('counter', {
    recentItems // Übergibt die gespeicherten Einträge an die View
  });
});

// --- API-Route für neue Essen-Einträge ---
app.post('/api/add-food', express.json(), (req, res) => {
  const { food } = req.body;
  
  // Simuliere Kalorienberechnung (z. B. 100 kcal pro Eintrag)
  const calories = 100; // Später durch echte Logik ersetzen
  totalCalories += calories;

  // Füge den Eintrag zur Liste hinzu
  recentItems.push({ name: food, calories });
  
  // Antwort an den Client
  res.json({
    totalCalories,
    recentItems,
    aiText: "Simulierte KI-Antwort" // Später durch OpenAI ersetzen
  });
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
