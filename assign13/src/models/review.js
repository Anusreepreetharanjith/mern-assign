const mongoose= require('mongoose');

const reviewSchema = new mongoose.Schema({

    name:{
        type:String, 
        required:true, 
        unique:true
    },

    comment:{
        type:String, 
        required:true
    },

    rating:{
        type:Number, 
        required:true
    },

    isbn:{
        type:String,
        required:true
    }
});

module.exports.Review= mongoose.model('Review',reviewSchema);