const express = require('express');
const app = express();
const port = process.env.port || 3000;

// only can use for express route
app.get('/', function (req){
    let host = req.get('host');
    let hostHeader = req.headers.host;
    console.log("host terdeteksi: "+host)
    console.log("host header terdeteksi: "+hostHeader)
})

console.log(window.location.pathname);

app.listen(port, console.log('listening on port 3000'));
