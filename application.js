const express = require('express');
const mongoose = require('mongoose');
const routes = require('./Routes/routes')
const jwt = require("jsonwebtoken")

var app = express(); 

app.use(express.json());



app.use(function(req,res,next){

    console.log("----------------------------------------------------------");
    console.log(req.headers.authorization);
    console.log("----------------------------------------------------------");
    
    if(
        req.headers && 
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0]==="JWT")
    {
        jwt.verify(req.headers.authorization.split(" ")[1],"qwertyuiop",(err,decode) =>{
            if(err){    req.user = undefined; }
            req.user = decode;
            next();
        })
    }
    else{
        req.user = undefined;
        next();
    }
})

// Add Router for CURD Operation
app.use("/user",routes)

app.use('/welcome', (req, res) => {
    res.send("<h2>   Welcome To                   </h2>"+
            " <h1>   NodeJS              </h1>"+
            " <h2>   Training Module.             </h2>");
  });


var PORT = 8081;
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

// connecting to a databse with mongoose library (mongoose.connect())
const uri = "mongodb+srv://MKK9313:MKK9313@cluster0.weeu8ok.mongodb.net/node_jwt?retryWrites=true&w=majority"
mongoose.connect(
    uri,{
        useNewUrlParser:true
    }).then( () => {
        console.log("Database Connected");

    }).catch(
        (err)=>{
            console.log(err);
        }
    )