import React from "react";
import './listResults.css';

const ListResults = (props) => {

    const { saveBook } = props;
    const { deleteBook } = props;

    console.log(props);

    if (!saveBook) {
        return (
            <div className='book-container d-flex' key={props._id}>
                <div className='book-image'>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className='book-info'>
                    <h2>{props.title}</h2>
                    <h4>{props.author}</h4>
                    <p>{props.description}</p>
                </div>
                <div className='button-container'>
                    <button className='deleteBtn btn-danger' id={props._id} onClick={() => deleteBook(props._id)}>Delete</button>
                    <a href={props.link} target="_blank" rel="noopener noreferrer"><button className='btn-primary'>Buy</button></a>
                </div>
            </div>
        )
    } else {
        return (
            <div className='book-container d-flex'>
                <div className='book-image'>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className='book-info'>
                    <h2>{props.title}</h2>
                    <h4>{props.author}</h4>
                    <p>{props.description}</p>
                </div>
                <div className='button-container'>
                    <button className='saveBtn' onClick={() => saveBook(props)}>Save</button>
                    <a href={props.link} target='_blank' rel="noopener noreferrer"><button className='viewBtn'>Buy</button></a>
                </div>
            </div>
        )
    }
}

export default ListResults;