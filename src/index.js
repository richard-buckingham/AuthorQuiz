import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthorQuiz from "./AuthorQuiz";
import registerServiceWorker from "./registerServiceWorker";
import { shuffle, sample } from "underscore";

const authors = [
  {
    name: "Mark Twain",
    imageUrl: "images/authors/marktwain.jpg",
    imageSource: "Wikimedia Commons",
    books: ["The Adventures of Huckleberry Finn", "Book2", "Book3", "Book4"]
  },
  {
    name: "Joseph Conrad",
    imageUrl: "images/authors/josephconrad.png",
    imageSource: "Wikimedia Commons",
    books: ["Heart of Darkness"]
  },
  {
    name: "J.K. Rowling",
    imageUrl: "images/authors/jkrowling.jpg",
    imageSource: "Wikimedia Commons",
    imageAttribution: "Daniel Ogren",
    books: ["Harry Potter and the Sorcerers Stone"]
  },
  {
    name: "Stephen King",
    imageUrl: "images/authors/stephenking.jpg",
    imageSource: "Wikimedia Commons",
    imageAttribution: "Pinguino",
    books: ["The Shining", "IT"]
  },
  {
    name: "Charles Dickens",
    imageUrl: "images/authors/charlesdickens.jpg",
    imageSource: "Wikimedia Commons",
    books: ["David Copperfield", "A Tale of Two Cities"]
  },
  {
    name: "William Shakespeare",
    imageUrl: "images/authors/williamshakespeare.jpg",
    imageSource: "Wikimedia Commons",
    books: ["Hamlet", "Macbeth", "Romeo and Juliet"]
  }
];

const state = {
  turnData: getTurnData(authors)
};

ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById("root"));
registerServiceWorker();

// helper functions
function getTurnData(authors) {
  // build the list of all books
  const allBooks = authors.reduce(function(resultArray, author, i) {
    console.log("in the reduce function...");

    console.log(
      "resultArray is the array constructed from the authors books... ",
      resultArray
    );
    console.log("author  ", author);
    console.log("i is the array index...  ", i);

    return resultArray.concat(author.books);
  }, []);

  // shuffle the list into a random order, then grab the fitst 2 books
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);

  // return the four randomly selected books, and find the author of the "answer" book
  return {
    books: fourRandomBooks,
    author: authors.find(author => author.books.some(title => title === answer))
  };
}
