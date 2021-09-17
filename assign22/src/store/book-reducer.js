import * as ActionNames from './action-names';

export const booksReducer=(books=[], action)=>{

    switch (action.type) {

        case ActionNames.BOOK_LIST:
            return action.payload;

        
        case ActionNames.BOOK_ADD:
            return [...books, action.payload];

   //     case ActionNames.AUTHOR_UPDATE:
     //       console.log(action);
       //     return authors.map(a=> a.id===action.payload.id? action.payload:a); 


        //case ActionNames.AUTHOR_DELETE:
         //   return authors.filter(a=>a.id!==action.payload.id);

        default:
            return books;
    }
}

export const bookReducer=( book=null, action)=>{
    
    switch(action.type){

     //   case ActionNames.AUTHOR_UPDATE:
        case ActionNames.BOOK_SELECT:
        case ActionNames.BOOK_ADD:
            return action.payload;

        
            

        default:
            return book;
    }
}