import React from 'react'
import PropTypes from 'prop-types'
import BookGrid from "./BookGrid"

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  updateView: PropTypes.func.isRequired
}

export default function BookShelf({title, books, updateView}) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BookGrid books={books} updateView={updateView}/>
      </div>
    </div>
  )
}