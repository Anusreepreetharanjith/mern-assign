let mongoose = require('mongoose');

const authors =  mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    id:{
        type:String,
        unique:true, 
        required:true
    },
    photo:{
        type:String,       
        
    }, 
    biography:{
        type:String
    }

},{

});

const Author= mongoose.model('Author', authors);



module.exports={ Author};