import React from "react";

class AuthorForm extends React.Component {
  constructor(props) {
    super(props);
    // create the default state for the component
    this.state = {
      name: "",
      imageUrl: "",
      bookTemp: "",
      books: []
    };

    // Because onFieldChange uses "this", we need to bind "this" to onFieldChange
    // This guarantees that the value of "this" in the method is set to the instance.
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddBook = this.handleAddBook.bind(this);
  }

  // allow input elements to be changes
  onFieldChange(event) {
    event.preventDefault();
    /*    console.log(
      `Updating the element ${event.target.name} with the value ${
        event.target.value
      }`
    ); */
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // handle form submission
  handleSubmit(event) {
    // prevent the form from being submitted
    event.preventDefault();
    console.log(`in handleSubmit. event = `, event);
    console.log(`in handleSubmit. this.state = `, this.state);
    this.props.onAddAuthor(this.state);
  }

  handleAddBook() {
    //console.log("in handleAddBook()");
    //console.log("this.state.books = ", this.state.books);
    /*     console.log(
      "this.state.books.concat([this.state.bookTemp]) = ",
      this.state.books.concat([this.state.bookTemp])
    ); */

    this.setState({
      books: this.state.books.concat([this.state.bookTemp]),
      bookTemp: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="AddAuthorForm__input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onFieldChange}
          />
        </div>

        <div className="AddAuthorForm__input">
          <label htmlFor="imageUrl">Image Url</label>
          <input
            type="text"
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.onFieldChange}
          />
        </div>

        {/* Display books */}
        <div className="AddAuthorForm__input">
          <label htmlFor="bookTemp">Books</label>
          {this.state.books.map(book => (
            <p key={book}>{book}</p>
          ))}

          {/* Add a new book to the books array */}
          <input
            type="text"
            name="bookTemp"
            value={this.state.bookTemp}
            onChange={this.onFieldChange}
          />
          <input type="button" value="+" onClick={this.handleAddBook} />
        </div>

        {/*Add submit button */}
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default AuthorForm;
