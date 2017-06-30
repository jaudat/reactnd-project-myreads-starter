import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import BookGrid from "./BookGrid"

export default class SearchPage extends Component {
  
  state = {
    results: [],
    query: ''
  }

  updateQuery(inputVal) {
    var query = inputVal.trim()
    if (!query) { 
      this.setState({ query: '' , results: [] })
    } else {
      BooksAPI.search(query, 10).then(results => {
        this.setState({ query , results })
      });
    }
  }

  render() {
    const query = this.state.query,
          results = this.state.results;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={query}
              onChange={ event => this.updateQuery.call(this, event.target.value) }
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookGrid books={results} />
        </div>
      </div>
    )
  }
}