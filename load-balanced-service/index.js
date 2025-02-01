const express = require('express');
const app = express();
const port = process.env.PORT || 3004;

app.get('/data', (req, res) => {
    res.json({ message: `Response from instance on port ${port}` });
});

app.listen(port, () => {
    console.log(`Load balanced service running on http://localhost:${port}`);
});