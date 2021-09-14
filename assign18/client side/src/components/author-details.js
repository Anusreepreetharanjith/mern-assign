import React, {useState,useEffect}from 'react';
import {withRouter} from 'react-router-dom';
import {AuthorService} from '../services/author-service';
import Loading from './loading';
import NotFound from './not-found';


const Component=(props)=>{

    const [author,setAuthor]=useState(null,props,);
    const _id=props.match.params._id;
    useEffect(()=>{
        
        //book will come after a delay
        AuthorService.instance.getAuthorbyId(_id).then((author)=>{
            console.log(`got for ${_id}: ${author}`);
            setAuthor(author);
        });        
    },[props.match.params._id]);
    
    if(author===null){
        return <Loading title={`searching for ${_id}`} />
    }

    if(author===undefined){
        return <NotFound message={`Sorry no book with id: ${_id} present in our record`}/>
    }


    return (
        <div className='book-details'>
            <h2>{author.name}</h2>
          
            
            <div className='book-info'>
                <img src={author.photo}/>
                <div className='info'>
                   <h3> About the Author </h3>
                    <hr/>
                  
                    <p>{author.biography}</p>
                    {/* <Expander title="Synopsis" content={book.description} short={200} /> */}
                </div>
            </div>
        </div>
    );
}


export default withRouter(Component);