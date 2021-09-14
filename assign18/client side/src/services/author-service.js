import { contains, copyObject, delay } from '../utils/core';
import http from './http';


const url = 'http://localhost:5000/api/authors/';

export class AuthorService {

    static instance = new AuthorService();

    getAll=async ()=>{
        try{
            //TODO: your await logic here
            // let response= await axios.get(url,{
            //     headers:{
            //         "x-api-key":"LET ME PASS"                    
            //     }
            // });

            let response=await  http.get('authors'); //http://localhost:5000/api/books
            console.log('response',response);
            return response.data;
            
        }catch(error){
            console.log('error',error);
            return null;
        }
    };

    getAuthorbyId = async (_id) => {
        try{
            //let response=await axios.get(`${url}/${isbn}`);
            let response= await http.get(`authors/${_id}`);
            console.log('book by isbn', response.data);
            return response.data;
        }catch(error){
            console.log('error fetching book by isbn',error);
            return undefined;
        }
    }




   

    _getAll = async () => {
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


    addAuthor = async (author) => {
        try{
            //let response=await axios.post(url,book);            
            let response= await http.post('authors',author);
            return {success:true, data:response.data};

        }catch(error){

            console.log('error posting data', error);
            return {success:false, error:error};
        }
    }

  //  removeBook = async (isbn) => {
  //      await delay(100);
  //      this.books = this.books.filter(b => b.isbn !== isbn);
  //      this.save();
  //  }

  async update(author) {
    //TODO: COMPLETE THIS WORK!
    const _id=author._id;
    try{
        let response=await http.put(`/authors/${_id}`,author);
        return {success:true,data:response};
    }catch(error){
        return {success:false, error:error};
    }
}


  


}