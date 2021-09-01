import React from "react";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h3>
          what word do you want to look up?
        </h3>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
        coded by {""}
        <a href="https://github.com/brnnkva/dictionary-react">brnnkva</a> 
        </small>
      </footer>
      </div>
    </div>
  );
}

