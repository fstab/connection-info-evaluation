const express = require('express');
const http = require('http');
const https = require('https');

const app = express();

function httpGet(url) {
    return new Promise((resolve, reject) => {
        const client = url.protocol === 'https:' ? https : http;
        const request = client.get(url, (response) => {
            response.resume(); // consume and discard body
            resolve(response);
        });
        request.on('error', reject);
    });
}

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
        const response = await httpGet(url);
        for (const [name, value] of Object.entries(response.headers)) {
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
