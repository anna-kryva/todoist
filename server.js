const express = require('express');

const app = express();

app.use(express.static('./dist/todoist'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/todoist/'}),
);

app.listen(process.env.PORT || 8080);
