const express = require('express');

const app = express();

app.use(express.static('./dist/angular-hron'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-hron/'}),
);

app.listen(process.env.PORT || 8080);