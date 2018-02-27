var https = require('https'),
    fs = require('fs'),
    express = require('express'),
    app = express();

app.get('/*', (req, res) => {
    res.status(500);
    res.send('Error!');
});

app.put('/*', (req, res) => {
    res.status(500);
    res.send('Error!');
});

app.post('/*', (req, res) => {
    res.status(500);
    res.send('Error!');
});

app.delete('/*', (req, res) => {
    res.status(500);
    res.send('Error!');
});

app.patch('/*', (req, res) => {
    res.status(500);
    res.send('Error!');
});

app.options('/*', (req, res) => {
    res.status(500);
    res.send('Error!');
});

var secureServer = https.createServer({
    key: fs.readFileSync('./ssl/server.key'),
    cert: fs.readFileSync('./ssl/server.crt'),
    ca: fs.readFileSync('./ssl/ca.crt'),
    requestCert: true,
    rejectUnauthorized: false
}, app).listen('443', function() {
    console.log("Secure Express server listening on port 443");
});