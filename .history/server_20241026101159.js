const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

// Serve static files
app.use(serveStatic(path.join(__dirname, 'public')));

// For all routes, serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
