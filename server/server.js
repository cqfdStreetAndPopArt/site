const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');

function readJson(filePath) {
  try { return JSON.parse(fs.readFileSync(filePath, 'utf8') || '[]'); }
  catch (e) { return []; }
}
function writeJson(filePath, arr) { fs.writeFileSync(filePath, JSON.stringify(arr, null, 2)); }

app.get('/api/ping', (req, res) => res.json({ ok: true }));

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });
  const contacts = readJson(CONTACTS_FILE);
  const record = { id: Date.now(), name, email, message, createdAt: new Date().toISOString() };
  contacts.push(record);
  writeJson(CONTACTS_FILE, contacts);
  return res.json({ ok: true, id: record.id });
});

app.post('/api/order', (req, res) => {
  const { cart, total } = req.body || {};
  if (!Array.isArray(cart) || cart.length === 0) return res.status(400).json({ error: 'Cart empty' });
  const orders = readJson(ORDERS_FILE);
  const record = { id: Date.now(), cart, total, createdAt: new Date().toISOString() };
  orders.push(record);
  writeJson(ORDERS_FILE, orders);
  return res.json({ ok: true, id: record.id });
});

// serve a small admin view (optional)
app.get('/admin/orders', (req, res) => {
  const orders = readJson(ORDERS_FILE);
  res.json(orders);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`CQFD backend running on http://localhost:${PORT}`));