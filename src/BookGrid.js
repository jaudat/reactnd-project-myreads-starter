import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

BookGrid.propTypes = {
  books: PropTypes.array.isRequired
}

export default function BookGrid({books}) {
  return (
      <ol className='books-grid'>
        {books.map( (book, index) => <Book key={index} book={book} /> )}
      </ol>
  )
}