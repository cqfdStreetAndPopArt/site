# CQFD Backend (minimal)

This small Node.js Express backend stores contact messages and orders in JSON files under `server/data`.

Install & run:

```bash
cd server
npm install
npm start
```

API:
- POST /api/contact  { name, email, message }  -> stores contact
- POST /api/order    { cart: [{title, price}], total } -> stores order
- GET /api/ping      -> health check
- GET /admin/orders  -> list all orders (simple JSON)

Note: this is a minimal local backend for development. For production, use a proper database and secure authentication, and don't store plain emails without consent.
