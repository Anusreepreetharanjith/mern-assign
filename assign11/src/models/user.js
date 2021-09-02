const mongoose = require('mongoose');

const users = mongoose.Schema({
   
 //   title: String,
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    }
  //  price:{
   //     type:Number,
   //     required:true
   // },
   // description:String,
 //   tags:{
   //     type:Array,
  //      required:false
  //  }
});

const UserModel= mongoose.model('users', users);

module.exports={
    UserModel
}