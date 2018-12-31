import React from "react";

import "./AddAuthorForm.css";

import AuthorForm from "./AuthorForm";

function AddAuthorForm({ match, onAddAuthor }) {
  return (
    <div className="AddAuthorForm">
      <h1>Add Author</h1>
      <AuthorForm onAddAuthor={onAddAuthor} />
    </div>
  );
}

export default AddAuthorForm;
