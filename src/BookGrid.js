import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

BookGrid.propTypes = {
  books: PropTypes.array.isRequired,
  classProp: PropTypes.string.isRequired
}

export default function BookGrid({classProp, books}) {
  return (
      <ol className={classProp}>
        {books.map( (book, index) => <Book key={index} book={book} /> )}
      </ol>
  )
}