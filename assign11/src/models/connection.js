require('dotenv').config();
const {DB_USER,DB_PASSWORD,DB_URL}=process.env;
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_URL}?retryWrites=true&w=majority`;
//const uri = "mongodb+srv://anusreepr1999:chachu@cluster0.b28p0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const mongoose = require('mongoose');


module.exports.connect= async()=>{
    await mongoose.connect(uri);
}