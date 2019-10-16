const express = require('express');
const serveStatic = require("serve-static");
const path = require('path');
const data = require('./data.json');
const port = process.env.PORT || 5000;

app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/users", (req, res, next) => {
    res.send(data);
});

app.listen(port, () => console.log('Example app listening on port 5000!'));