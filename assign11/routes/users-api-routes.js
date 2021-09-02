const express = require('express');
const { UserModels } = require('../models/user');


const getRouter = () => {

    // console.log('setting up the routes');
    let router = express.Router();
    //  console.log(router);
    router
        .route("/")
    //    .get(async (request, response) => {

      //      let books = await BookModel.find();
     //       response.json(books);

     //   })
        .post(async (request, response) => {
            try {
                let bookData = request.body;
                let book = new BookModel(bookData);
                let result = await book.save();
                response.status(201).json(result);
            } catch (err) {
                response.status(400).json({ error: err, message: err.message });
            }
        });

        return router;
    } 

module.exports = getRouter;