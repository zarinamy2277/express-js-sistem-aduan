import express from 'express';
import aduanRouter from './router/aduan.router';
import dotenv from 'dotenv';
import morgan from 'morgan';
import logger from './utils/logger';
//load environment variables from .env file
dotenv.config();

const app = express();
const port = 3000;

app.use(
  morgan('dev', {
    stream: { write: (message) => logger.info(message.trim()) },
  })
);

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