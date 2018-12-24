import React from "react";
import AuthorQuiz from "../AuthorQuiz";

function Turn({ author, books }) {
  return (
    <div className="row turn" style={{ backgroundColor: "white" }}>
      <div className="col-4 offset-1" style={{ backgroundColor: "white" }}>
        <img src={author.imageUrl} className="authorimage" alt="Author" />
      </div>
      <div className="col-6">
        {books.map(title => (
          <p>{title}</p>
        ))}
      </div>
    </div>
  );
}

export default Turn;
