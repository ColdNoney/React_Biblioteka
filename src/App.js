import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import ShelfGrid from './ShelfGrid'

class BooksApp extends Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/' component={ShelfGrid} />
        <Route path='/search' component={SearchPage} />
      </div>
    )
  }
}

export default BooksApp
