import React from "react";

import "./AddAuthorForm.css";

import AuthorForm from "./AuthorForm";

function AddAuthorForm({ match }) {
  return (
    <div className="AddAuthorForm">
      <h1>Add Author</h1>
      <AuthorForm />
    </div>
  );
}

export default AddAuthorForm;
