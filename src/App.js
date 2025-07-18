import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      setQuote("Could not fetch quote. Try again!");
      setAuthor("");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <div className="quote-box">
        <h1>Random Quote Generator</h1>
        <p className="quote">"{quote}"</p>
        <p className="author">- {author}</p>
        <button onClick={fetchQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default App;
