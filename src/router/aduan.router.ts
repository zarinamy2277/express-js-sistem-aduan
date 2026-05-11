import express from 'express';

const router = express.Router();

// Data aduan contoh
const aduanData = [
  {
    id: 1,
    judul: 'Lampu jalan rusak',
    deskripsi: 'Lampu jalan di depan rumah mati sejak seminggu lalu.',
    status: 'pending',
    tanggal: '2026-05-11',
  },
  {
    id: 2,
    judul: 'Sampah menumpuk',
    deskripsi: 'Sampah di sekitar taman belum diangkut.',
    status: 'diproses',
    tanggal: '2026-05-10',
  },
];

// Endpoint untuk view aduan
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: aduanData,
  });
});

export default router;