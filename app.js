const express = require('express');

// App für Port 3000
const app3000 = express();
const port3000 = 3000;

app.use(express.static('public_html'))

app3000.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public_html', 'index.html')) //geht nichts
});

app3000.listen(port3000, () => {
  console.log(`Port 3000 läuft: http://localhost:${port3000}`);
});

// App für Port 3001 
const app3001 = express();
const port3001 = 3001;

app3001.get('/', (req, res) => {
  res.send('<h1>Hallo von Port 3001!</h1><p><a href="/hello">Zu /hello</a></p>');
});

app3001.get('/hello', (req, res) => {
  res.send('<h1>Hello!</h1>');
});

app3001.listen(port3001, () => {
  console.log(`Port 3001 läuft: http://localhost:${port3001}`);
});