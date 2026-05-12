import { Router } from 'express';

// Contoh data aduan
const aduan = [
    { id: 1, title: 'Aduan 1', description: 'Deskripsi aduan 1' },
    { id: 2, title: 'Aduan 2', description: 'Deskripsi aduan 2' },
];

const router = Router();

const aduans = new Map();
aduans.set('1', {
  nama_pengadu: 'John Doe',
  catatan: 'Catatan aduan 1',
  kategori_aduan: 'Kategori 1',
  email: 'john.doe@example.com',
});
aduans.set('2', {
  nama_pengadu: 'Jane Doe',
  catatan: 'Catatan aduan 2',
  kategori_aduan: 'Kategori 2',
  email: 'jane.doe@example.com',
});

// Endpoint untuk melihat aduan
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: Array.from(aduans.values()),
  });
});

router.post('/create', (req, res) => {
  // body params
  /**
   * 1. Nama Pengadu
   * 2. catatan
   * 3. categori aduan
   * 4. email
   *
   * // validasi - DONE
   */

  const { nama_pengadu, catatan, kategori_aduan, email } = req.body;

  // validation / validasi
  if (!nama_pengadu || !catatan || !kategori_aduan || !email) {
    return res.status(400).json({
      message:
        'All fields (nama_pengadu, catatan, kategori_aduan, email) are required.',
    });
  }

  const id = String(Date.now()); // - create a unique id, we are using date, but we will change to uuid
  const aduan = { nama_pengadu, catatan, kategori_aduan, email };
  aduans.set(id, aduan); // -- add new record

  return res
    .status(201)
    .json({ message: 'Aduan created.', data: { id: id, ...aduan } });
});

router.get('/view/:id', (req, res) => {
  const aduanId = req.params.id;

  if (!aduanId) {
    return res.status(400).json({ message: 'Invalid aduanId.' });
  }

  const aduan = aduans.get(aduanId);

  if (!aduan) {
    return res.status(404).json({ message: 'Aduan not found.' });
  }

  return res.json({ data: aduan });
});


router.patch('/update/:id', (req, res) => {
  const aduanId = req.params.id;

  if (!aduanId) {
    return res.status(400).json({ message: 'Invalid aduanId.' }); // this is to check false, undefeined, null, empty string, etc
  }

  const existing = aduans.get(aduanId);

  if (!existing) {
    return res.status(404).json({ message: 'Aduan not found.' });
  }

  const { nama_pengadu, catatan, kategori_aduan, email } = req.body;

  const updated = {
    ...existing, // spread operator to copy existing properties
    nama_pengadu: nama_pengadu || existing.nama_pengadu, // ternary operator to check if new value is provided, if not use existing value
    catatan: catatan || existing.catatan,
    kategori_aduan: kategori_aduan || existing.kategori_aduan,
    email: email || existing.email,
  };

  aduans.set(aduanId, updated);
  return res.json({ message: 'Aduan updated.', data: updated });
});

export default router;