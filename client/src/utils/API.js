import axios from 'axios';

export default {
    
    getSearchBooks: function(search) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search)
    },

    getBooks: function () {
        return axios.get('/api/book');
    },

    getBook: function (id) {
        return axios.get('/api/book/' + id);
    },

    saveBook: function (savedBooks) {
        console.log("savedBooks", savedBooks)
        return axios.post('/api/book/', savedBooks);
    },

    deleteBook: function (id) {
        return axios.delete('/api/book/' + id)
    }
}