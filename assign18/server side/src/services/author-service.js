const { response } = require('express');
const { Author } = require('../models/author');
const { ServiceError } = require('../utils/service-error');


function bindMethods(object) {
    console.log('started binding...', object);
    for (let prop in object) {
        let propValue = object[prop];
        console.log('prop', prop);
        if (typeof (propValue) === 'function') {
            console.log('binding', propValue);
            propValue.bind(object);
        }
    }
}

class AuthorService {

    constructor() {
        //bindMethods(this);   

        const functions = [
            this.getAllAuthors,
            this.getAuthorById,
            this.removeAuthor,
            this.updateAuthor,

            this.addAuthor,
            this.search
        ];

        for (let f of functions) {
            //console.log(f.name); 
            this[f.name] = f.bind(this);
        }
    }

    async getAllAuthors() {
        return await Author.find();
    }

    async getAuthorById({ id }) {

        let author = await Author.findOne({ _id: id });
        if (!author)
            throw new ServiceError(404, "Invalid Author Id", { _id: id });
        else
            return author;

    }


    async addAuthor({body}){
        try{
           

            let authorData={...body};
            console.log('bookData',authorData);
            let newAuthor= new Author({...body});
            console.log('new book',newAuthor);
            await newAuthor.save();
            return newAuthor;
        } catch(error) {
            console.log('error saving', error);
            if(error.constructor.name==="ServiceError")
                throw error;
            else
                throw new ServiceError(400, error.message, {error});
        }
    }



    async removeAuthor({ id }) {
        try {
            let book = await this.getAuthorById({ id });
            await book.delete();
        } catch (e) {
            console.log(e);
        }

    }

    async updateAuthor({ id, body }) {
        let book = await this.getAuthorById({ id });
        return await Author.findOneAndUpdate({ id: id }, body);
    }



    async search({ q }) {
        const a = new RegExp(q, 'i');
        return await Author.find({ $text: { $search: a } })
    }

}

module.exports = { AuthorService }