import React, { Component } from 'react'

class Book extends Component {

  state = {
    book: this.props.book,
    shelf: this.props.shelf,
  }

  handleChange = (event) => {
   this.setState({shelf: event.target.value})
   this.props.shelfChangeHandle(this.state.book, event.target.value)
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <img className="book-cover" src={this.props.book.imageLinks.thumbnail} alt="slika knjige"></img>
          <div className="book-shelf-changer">
            <select value={this.state.shelf} onChange={this.handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.author}</div>
      </div>
    )
  }
}

export default Book
