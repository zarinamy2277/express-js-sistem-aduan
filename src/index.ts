import express from 'express';
import aduanRouter from './router/aduan.router';
import dotenv from 'dotenv';
import morgan from 'morgan';
import logger from './utils/logger';
import db from './database/db';


//load environment variables from .env file
dotenv.config();
// check database connection on startup
db.raw('SELECT 1')
  .then(() => {
    console.log('Database connection established');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
    process.exit(1); // Exit with failure code
  });

  
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