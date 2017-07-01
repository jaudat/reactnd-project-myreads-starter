import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

export default class BookGrid extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateView: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.changeShelf = this.changeShelf.bind(this)
  }

  changeShelf(book, newShelf) {
    var updateView = this.props.updateView
    BooksAPI.update(book, newShelf).then( allBooks => updateView && updateView() )
  }

  render() {
    var books = this.props.books
    return (
      <ol className='books-grid'>
        {books.map( (book, index) => <Book key={index} book={book} updateBook={this.changeShelf} /> )}
      </ol>
    )
  }
}