import { contains, copyObject, delay } from '../utils/core';



const url = 'http://localhost:5000/api/authors/';

export class AuthorService {

    static instance = new AuthorService();

    constructor() {

    }

    getAll = async () => {
        try {
            let response = await fetch(url);
            console.log('response', response);
            if (response.status !== 200) {
                console.error('http error', response.status);
                return [];
            }
            let authors = await response.json();
            return authors;
        } catch (error) {
            console.log('error', error);
            return null;
        }
    }


    addAuthor = (author) => {
        this.authors.push(author);
        this.save();
        
    }

  //  removeBook = async (isbn) => {
  //      await delay(100);
  //      this.books = this.books.filter(b => b.isbn !== isbn);
  //      this.save();
  //  }




  
  async update(id, author) {
        let existing = await this.getAuthorbyId(id);
       if (existing) {
            copyObject(existing, author);
            console.log('existing', existing);
          this.save();
        }
    }

}