import React from "react";
import { Link } from "react-router-dom";

import "./AuthorQuiz.css";
import "./bootstrap.min.css";

// app components
import Hero from "./components/Hero";
import Turn from "./components/Turn";
import Continue from "./components/Continue";
import Footer from "./components/Footer";

function AuthorQuiz({ turnData, highlight, onAnswerSelected, onContinue }) {
  //console.log("turnData = ", turnData);
  return (
    <div className="container-fluid">
      <Hero />
      <Turn
        {...turnData}
        highlight={highlight}
        onAnswerSelected={onAnswerSelected}
      />
      <Continue show={highlight === "correct"} onContinue={onContinue} />
      <p>
        <Link to="/add">Add an author...</Link>
      </p>
      <Footer />
    </div>
  );
}

export default AuthorQuiz;
