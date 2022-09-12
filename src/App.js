import React, { useState, useEffect } from "react";
import Characters from "./components/Characters";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([
    { name: "cat", clicked: false },
    { name: "chicken", clicked: false },
    { name: "deer", clicked: false },
    { name: "dog", clicked: false },
    { name: "monkey", clicked: false },
    { name: "pig", clicked: false },
    { name: "rabbit", clicked: false },
    { name: "ram", clicked: false },
    { name: "rat", clicked: false },
  ]);
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);

  const handleAdd = () => {
    setScore((prevScore) => prevScore + 1);
  };

  useEffect(() => {
    if (score > bestScore) setBestScore(score);
  }, [score]);

  return (
    <div className="App">
      <header>
        <h1>Animal Memory Game!</h1>
        <div className="score">
          <h3>Score: {score}</h3>
          <h3>Best Score: {bestScore}</h3>
        </div>
      </header>
      <div className="characters">
        <Characters
          characters={characters}
          setCharacters={setCharacters}
          setScore={setScore}
        />
      </div>
    </div>
  );
}

export default App;
