const express=require('express');
const path=require('path');
const getAuthorRouter = require('./routes/authors-api-route')
const bodyParser=require('body-parser');
const getBookRouter=require('./routes/books-api-route');
const getOldBookRouter=require('./routes/books-api-route-old');
const getUserRouter= require('./routes/user-route');
const cors = require('cors');

function configureExpress(basePath){
    const app=express();   
    app.use(bodyParser.json());
    app.use(express.static(path.join(basePath, 'public')));  
    app.use(cors());

    //console.log(getBookRouter);
    //console.log(getBookRouter());
    
   app.use('/api/v1/books', getOldBookRouter());
   app.use('/api/books', getBookRouter());
   app.use('/api/authors', getAuthorRouter());
    app.use('/api/users',getUserRouter());
    

    return app; 
};

module.exports={
    configureExpress
};