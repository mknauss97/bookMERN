import React from 'react'
import ListResults from '../list/listResults';

const SearchResults = props => {
    const { saveBook } = props;
    console.log(props)

    return (props.books.length === 0) ? (
       
        <div className="result-container">
            <div className="result-title">
                <h3>Search Results:</h3>
            </div>
        </div>
) : (
        
            <div className="result-container">
                <div className="result-title">
                    <h3>Search Results:</h3>
                    {props.books.map(book => {
                        return (
                            <div>
                            <ListResults
                             key={book.id}
                             title={book.volumeInfo.title}
                             authors={book.volumeInfo.authors}
                             description={book.volumeInfo.description}
                             link={book.volumeInfo.infoLink}
                             image={book.volumeInfo.imageLinks.thumbnail}
                             _id={book._id}
                             saveBook={saveBook}
                             />
                             </div>
                        );
                    })}
                </div>
            </div>
        
    )
}

export default SearchResults;