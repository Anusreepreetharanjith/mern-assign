import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './loading';
import "./author-list.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTrash, faInfo, faEdit, } from '@fortawesome/free-solid-svg-icons'
import { AuthorService } from '../services/author-service';



const Component = () => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        AuthorService.instance.getAll().then(setAuthors);
    });



    if (authors.length === 0) {
        return <Loading text="loading" />
    }

    return (
        <div className="imaged">
            <h2>List of Authors</h2>

            <body>
                <div className="image-grid">
                    {
                        authors.map((author) => (
                            <div key={author._id}>
                                <div><img className="mained" src={author.photo} /></div>
                                <div class="desc"> {author.name}</div>
                                <div>

                                    <Link  to={`/author/details/${author._id}`} className='btn  btn-primary'><FontAwesomeIcon icon={faInfo} /> </Link>
                                    <Link  to= {`/author/edit/${author._id}`}   className='btn  btn-primary '><FontAwesomeIcon icon={faEdit} /></Link>

                                </div>



                            </div>
                        ))
                    }
                </div>

             
            </body>


        </div>);
}

export default Component