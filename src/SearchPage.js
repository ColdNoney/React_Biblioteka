import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {
  state = {
    showSearchPage: this.props.showSearch,
    query: '',
    books: [],
  }

  updateQuery = (query) => {
    BooksAPI.search(query).then((response) => {
      this.setState ({ query: query })
      this.setState ({ books: response })
    })
  }

  showBooks = (query) => {
    this.updateQuery(this.state.query)
  }

  debouncedInput = _.debounce((event) => {
      this.showBooks(this.state.query)
    }
    , 500).bind(this)

  render () {
    let { books } = this.state
    return (
      <div className="search-page">
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              className="close-search"
              to="/"
            >Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={(event) => {
                  this.setState({query: event.target.value})
                  this.debouncedInput(event)
                }}
              />
            </div>
          </div>
          <div className="bookshelf">
            <div className="bookshelf-books">
              <ol className="books-grid">
                <li>
                  {books.map((book, index) => (
                    <Book
                      key={`book-${index}`}
                      book={book}
                    />
                  ))}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchPage
