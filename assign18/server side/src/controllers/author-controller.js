const {AuthorService} = require('../services/author-service');

//console.log('BookService',BookService);

const service=new AuthorService();

class AuthorController {
    
    constructor(){
        //service=new BookService();

        //this.getAllBooks=this.getAllBooks.bind(this);
        //do this for all methods
    }


    async addAuthor(request,response){
        try{
            const result=await service.addAuthor(request.body);
            response.status(201).json(result);
        }catch(e){
            response.status(e.status).json(e.details);
        }
    }

    
    async search(request,response){
        try{
        console.log(request.query);
        let result=await service.search(request.query.q);
        response.send(result);
        }catch(err){
            response.send(err);
        }
    }

}

module.exports={AuthorController};