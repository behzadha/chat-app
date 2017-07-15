const express = require('express');
const path = require('path');
const port=3000 || process.env.port;

const publicPath = path.join(__dirname,'../public');

var app = express();


app.use(express.static(publicPath));

app.listen(port,()=>{
    console.log(`Server is listening to port ${port}`);
})