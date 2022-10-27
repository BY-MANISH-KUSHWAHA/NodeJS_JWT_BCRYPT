// need to install: npm install mongoose (npm i mongoose)
const mongoose = require('mongoose');

// Creating a Schema on type of data communicating to mongodb

const UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

// var a =10;
// module.export = a -> can be used everywhere
module.exports = mongoose.model("users",UserSchema)