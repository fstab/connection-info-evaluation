const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(`> ${req.method} ${req.url}`);
    for (const [name, value] of Object.entries(req.headers)) {
        console.log(`> ${name}: ${value}`);
    }
    const originalEnd = res.end.bind(res);
    res.end = function (...args) {
        for (const name of res.getHeaderNames()) {
            console.log(`< ${name}: ${res.getHeader(name)}`);
        }
        console.log();
        return originalEnd(...args);
    };
    next();
});

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello, World!\n');
});

const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
