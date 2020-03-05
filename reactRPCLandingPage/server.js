const express = require('express');
const path = require('path');
const app = express();

PORT = 3000;
const bodyParser = require('body-parser');

app.use(express.static("assets"));

app.use('/dist', express.static(path.resolve(__dirname, './dist/')));

app.use((err, req, res, next) => {
    console.log('Global error handler', err);
});

app.listen(PORT, () => {
    console.log("Listening on port", PORT);
})