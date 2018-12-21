import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {

  render() {
    let books = this.props.books
    let title = this.props.title
    let shelf = this.props.shelf
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              {books.map((book, index) => (
                <Book
                  key={`book-${index}`}
                  book={book}
                  shelf={shelf.slug}
                  shelfChangeHandle={this.props.handleShelfChange}
                />
              ))}
            </li>
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
