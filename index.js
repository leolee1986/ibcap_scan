const express = require('express');
const dirs = require('./logic/listFolder')
const app = express();
const path = require('path');


app.get('/', function(req, res){
    res.render('home.ejs');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("server is running at PORT: " + PORT);

var a = dirs;

console.log(a);