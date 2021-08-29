import React from "react";
import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h3>
          dictionary
        </h3>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>
        coded by me 
        </small>
      </footer>
      </div>
    </div>
  );
}

