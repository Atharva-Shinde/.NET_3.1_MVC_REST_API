let express = require('express');
let path = require('path');
let fs = require('fs');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, function () {
    console.log("app listening on port 3000!");
  });
  