import React,{useEffect} from 'react';
//import AuthorEditor from './book-editor';
import { useSelector, useDispatch } from 'react-redux';
import {getAll, selectBook} from '../store/book-action';
import BookThumbnail from './book-thumbnail';
import If from './if';
import Loading from './loading';
const BookList = ({ onBookSelect }) => {

    const books = useSelector(state => state.books);
    const selectedBook=useSelector(state => state.selectedBook);
    const dispatch=useDispatch();

    useEffect(()=>{
        if(books.length===0){
            getAll(dispatch);    
        }
    },[]);


    const loadbooks=()=>{
        getAll(dispatch);
    }



    const handleSelectBook=(book)=>{
        selectBook(dispatch,book);
    }

    const selectClassName=(book)=>{
        let className="list-group-item list-group-item-action";
        if(book===selectedBook)
            className+=" active";

        return className;
    }

    return (
        <div className="list-input" >
            <If condition={books.length===0}>
                {/* <button onClick={loadbooks}>Load books</button> */}
                <Loading compact/>
            </If>
        </div>   
         {
                books.map(book => (
                    <button type="button" key={book.isbn} onClick={()=>handleSelectBook(book)} className={selectClassName(book)}>
                         <div className="row">
                   <img src={book?.cover} alt={book?.title} style={{ width: 80 }} className="col col-4"></img>
                    <div className="col col-8"></div>
              </div>
                  </button>
                    
               )
              )
            }

           

       
    );

};




export default BookList;












