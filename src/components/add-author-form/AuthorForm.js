import React from "react";

class AuthorForm extends React.Component {
  constructor(props) {
    super(props);
    // create the default state for the component
    this.state = {
      name: "",
      imageUrl: ""
    };

    // Because onFieldChange uses "this", we need to bind "this" to onFieldChange
    // This guarantees that the value of "this" in the method is set to the instance.
    this.onFieldChange = this.onFieldChange.bind(this);
  }

  // allow input elements to be changes
  onFieldChange(event) {
    event.preventDefault();
    console.log(
      `Updating the element ${event.target.name} with the value ${
        event.target.value
      }`
    );
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // handle form submission
  handleSubmit(event) {
    // prevent the form from being submitted
    event.preventDefault();
    this.props.onAddAuthor(this.state);
  }

  render() {
    return (
      <form onSubmit="{this.handleSubmit}">
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
      </form>
    );
  }
}

export default AuthorForm;
