import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import SearchPage from './SearchPage'
import MainPage from './MainPage'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path='/search' component={SearchPage} />
        <Route exact path='/' component={MainPage} />
      </div>
    )
  }
}

export default BooksApp