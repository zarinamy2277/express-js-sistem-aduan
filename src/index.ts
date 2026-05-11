import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hai Zarina. Selamat datang ke kelas Node js!')
})

app.get('/first-endpoint', (req, res) => {
  res.json({
    message: 'Ini adalah endpoint pertama saya',
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})