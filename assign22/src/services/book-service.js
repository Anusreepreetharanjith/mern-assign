import getHttp from './http';

export class BookService{

    static instance=new BookService();

    getAll=async ()=>{

        const response= await getHttp().get('books');
        return response.data;
    }

    addBook=async (book)=>{
        const response= await getHttp().post('books',book);
        return response.data;
    }

  //  update=async(book)=>{
       // const response= await getHttp().put(`books/${book.id}`,book);
      //  console.log('update response',response);
     //   return response.data;
 //   }
}