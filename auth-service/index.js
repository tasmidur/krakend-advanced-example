const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3003;

const SECRET_KEY = 'your-secret-key';

app.get('/jwk', (req, res) => {
    res.json({ key: SECRET_KEY });
});

app.post('/login', (req, res) => {
    const token = jwt.sign({ userId: 1 }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

app.listen(port, () => {
    console.log(`Auth service running on http://localhost:${port}`);
});