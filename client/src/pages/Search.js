import React, { Component } from 'react';
import Header from '../components/header/header'
import SearchForm from '../components/form/searchForm';
import API from '../utils/API';
import SearchResults from '../components/results/searchedResults';
import Footer from '../components/footer/footer';



class Search extends Component {
    state = {
        search: '',
        books: []
      }
    
      handleInputChange = event => {
        this.setState({ search: event.target.value })
      }

      handleFormSubmit = event => {
          event.preventDefault();
          API.getSearchBooks(this.state.search)
          .then(res => {
              console.log(res, res.data.items[0].volumeInfo.title, res.data.items[0].volumeInfo.authors)
              this.setState({ books: [...res.data.items ]})
          })
          .catch(err => console.log(err));
      };

      saveBook = book => {
        API.saveBook({
          title: book.title,
          authors: book.authors[0],
          description: book.description,
          image: book.image,
          link: book.link
        })
        .then(res => console.log("Book Saved!", res))
        .catch(err => console.log(err.response, book.authors, book.infoLinks))
      }
    
      render() {
        return (
            <div>
            <Header />
            <SearchForm
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            />
            <SearchResults 
            books={this.state.books}
            saveBook={book => this.saveBook(book)}
            />
            <Footer />
          </div>
        );
      }
}

export default Search; 