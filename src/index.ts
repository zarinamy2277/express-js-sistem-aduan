import express from 'express';
import aduanRouter from './router/aduan.router';

const app = express();
const port = 3000;

app.use(express.json()); // Middleware untuk parsing JSON

app.get('/', (req, res) => {
  res.send('Hai Zarina. Selamat datang ke kelas Node js!')
})

app.get('/first-endpoint', (req, res) => {
  res.json({
    message: 'Ini adalah endpoint pertama saya',
  })
})

// Gunakan router aduan
app.use('/aduan', aduanRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})