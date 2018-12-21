import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'

class ShelfGrid extends Component {

  state = {
    books: [],
    shelves: [
      {
        title: 'Currently reading',
        slug: 'currentlyReading'
      },
      {
        title: 'Want to read',
        slug: 'wantToRead'
      },
      {
        title: 'Read',
        slug: 'read'
      }],
  }

  filterBooksShelves = (book, shelf) => {
    const books = this.state.books.map(b => {
      if (book.id === b.id) {
        return {
          ...book,
          shelf: shelf,
        }
      }
      return b
    })

    this.setState({ books })
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render () {
    let shelves = this.state.shelves
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map((shelf, index) => (
              <Shelf
                key={`shelf-${index}`}
                books={this.state.books.filter(book => book.shelf === shelf.slug )}
                title={shelf.title}
                shelf={this.state.shelves}
                handleShelfChange={this.filterBooksShelves}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link
            to='/search'
            className="open-search-button"
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ShelfGrid
