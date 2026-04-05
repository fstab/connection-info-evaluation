const express = require('express');

const app = express();

app.get('/', async (req, res) => {
    const targetUrl = req.query['target_url'];
    if (!targetUrl) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(400).send('Missing target_url query parameter\n');
        return;
    }
    try {
        const url = new URL(targetUrl);
        console.log(`> GET ${url}`);
        const response = await fetch(url);
        for (const [name, value] of response.headers.entries()) {
            console.log(`< ${name}: ${value}`);
        }
        console.log();
        res.setHeader('Content-Type', 'text/plain');
        res.send('Success\n');
    } catch (e) {
        console.error(e);
        res.setHeader('Content-Type', 'text/plain');
        res.send('Error\n');
    }
});

const port = 8080;
app.listen(port, () => {
    console.log(`Client listening on port ${port}`);
});
