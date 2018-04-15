var express = require('express');
var app = express();
app.set('view engine', 'html');
app.use(express.static(__dirname));

//Store all JS and CSS in Scripts folder.
app.get('*',(req,res)=>{
res.sendFile(__dirname+"/index.html")
})
app.listen(80);
