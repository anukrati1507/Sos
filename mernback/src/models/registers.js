const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    fname: {
        type:String,
        required:true
    },
      lname: {
          type:String,
          required:true
      },
      password: {
        type:String,
        required:true
      },
      email: {
        type:String,
        required:true,
        unique:true
      },
      aadhar: {
        type:String,
        required:true
      },
      mobile: {
        type:Number,
        required:true
      },
      age:{
        type:Number,
        required:true
      },
      cpassword:{
        type:String,
        required:true
      }
})

//create collection

const register = new mongoose.model("Register",userschema);
module.exports =register;
