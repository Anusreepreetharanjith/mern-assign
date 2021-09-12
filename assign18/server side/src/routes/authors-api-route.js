const express = require('express');
const { AuthorService } = require('../services/author-service')
const { handleRequest } = require('../utils/express-utils');


const getRouter = () => {

  const service = new AuthorService();
  let router = express.Router();

  router
    .route("/")

    .get(handleRequest(service.getAllAuthors))
    .post(handleRequest(service.addAuthor));


  router
    .route('/:id')
    .get(handleRequest(service.getAuthorById))
    .put(handleRequest(service.updateAuthor))
    .delete(handleRequest(service.removeAuthor));


   


  // router.get('/by/:author',handleRequest(service.getBooksByAuthor));

  router.get('/search/term', handleRequest(service.search));


  return router;


};


module.exports = getRouter;
