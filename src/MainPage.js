import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf'

export default class MainPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      books: []
    }

    this.updateView = this.updateView.bind(this)
  }

  componentDidMount() {
    this.updateView()
  }

  updateView() {
    BooksAPI.getAll().then(books => {
      this.setState({books});
    });
  }


  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf 
              title='Currently Reading' 
              books={this.state.books.filter( book => book.shelf === 'currentlyReading')}
              updateView={this.updateView}
            />
            <BookShelf 
              title="Want to Read" 
              books={this.state.books.filter( book => book.shelf === 'wantToRead')}
              updateView={this.updateView}
            />
            <BookShelf 
              title="Read" 
              books={this.state.books.filter( book => book.shelf === 'read')}
              updateView={this.updateView}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}