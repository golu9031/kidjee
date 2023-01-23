// const mongoose= require('mongoose');
// const userSchema= new mongoose.Schema({
//      email: String,
//      password: String
//  });
//  module.exports = mongoose.model("Users,userSchema");


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String
   
  }
 
);

module.exports = mongoose.model("users", userSchema);