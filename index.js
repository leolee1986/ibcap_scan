const express = require('express');
const listFolder = require('./logic/listFolder')
const app = express();
const path = require('path');




app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});



const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("server is running at PORT: " + PORT);