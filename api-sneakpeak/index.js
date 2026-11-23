const express = require('express');
const cors = require('cors');
const dataSepatu = require('./sepatu.json');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('API SneakPeak Aktif! Gunakan /api/lokal atau /api/internasional');
});

app.get('/api/lokal', (req, res) => {
  res.json(dataSepatu.lokal);
});

app.get('/api/internasional', (req, res) => {
  res.json(dataSepatu.internasional);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server API SneakPeak berjalan di http://0.0.0.0:${PORT}`);
});