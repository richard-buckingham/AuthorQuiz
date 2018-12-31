import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, withRouter } from "react-router-dom";

import registerServiceWorker from "./registerServiceWorker";
import { shuffle, sample } from "underscore";

import "./index.css";

// my components
import AuthorQuiz from "./AuthorQuiz";
import AddAuthorForm from "./components/add-author-form/AddAuthorForm";

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
  turnData: getTurnData(authors),
  highlight: ""
};

// Create an App react component to render our application
function App() {
  return <AuthorQuiz {...state} onAnswerSelected={onAnswerSelected} />;
}

// The sole purpose of this wrapper function is to allow
// a prop to be added to the <AddAuthorForm element
const AuthorWrapper = withRouter(({ history }) => (
  <AddAuthorForm
    onAddAuthor={author => {
      authors.push(author);
      history.push("/");
    }}
  />
));

function onAddAuthor(author) {
  //console.log("authors before = ", authors);
  authors.push(author);
  //console.log("authors after = ", authors);
}

function render() {
  ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={App} />
        <Route path="/add" component={AuthorWrapper} />
      </React.Fragment>
    </BrowserRouter>,
    document.getElementById("root")
  );
}

// call render when the app is first loaded
render();
registerServiceWorker();

// helper functions
// refer to https://medium.freecodecamp.org/reduce-f47a7da511a9 for example of using the reduce function...
function getTurnData(authors) {
  // build the list of all books
  const allBooks = authors.reduce(function(accumulator, currentValue, i) {
    //console.log("in the reduce function...");

    //console.log(
    //  "accumulator is the array constructed from the authors books... ",
    //  accumulator
    //);
    //console.log("currentValue is the author...  ", currentValue);
    //console.log("i is the array index...  ", i);

    return accumulator.concat(currentValue.books);
  }, []); // <== note the  accumulator defaults to an empty array...

  // shuffle the list into a random order, then grab the fitst 2 books
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);

  // return the four randomly selected books, and find the author of the "answer" book
  return {
    books: fourRandomBooks,
    author: authors.find(author => author.books.some(title => title === answer))
  };
}

function onAnswerSelected(selectedAnswer) {
  console.log(`selectedAnswer = ${selectedAnswer}`);
  console.log(`state =`, state);
  // is the user's answer correct or incorrect?
  const isCorrect = state.turnData.author.books.some(
    book => book === selectedAnswer
  );
  console.log(`isCorrect =`, isCorrect);

  // update the highlight property of state
  state.highlight = isCorrect ? "correct" : "wrong";
  // call render as we have updated the app's state
  render();
}
