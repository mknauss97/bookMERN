import React from "react";
import ListResults from '../list/listResults';

const SavedResults = props => {
    const { deleteBook } = props;
    console.log(props)
    
    return (props.books.length === 0) ? (

            <div className="result-container">
                <div className="result-title">
                    <h3>Books that You Saved</h3>
                </div>
            </div>
    ) : (

                <div className="result-container">
                    <div className="result-title">
                        <h3>Books that You Saved</h3>
                        {props.books.map(book => {
                            return (
                                <div>
                            <ListResults
                             key={book.id}
                             title={book.title}
                             authors={book.authors}
                             description={book.description}
                             link={book.link}
                             image={book.image}
                             _id={book._id}
                             deleteBook={deleteBook}
                             />
                             </div>
                            );
                        })}
                    </div>
                </div>
        )
}
export default SavedResults