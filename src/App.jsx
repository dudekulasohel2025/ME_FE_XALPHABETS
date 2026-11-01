import React from "react";
import { useEffect, useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (/^[a-zA-Z]$/.test(event.key)) {
        setText((prev) => prev + event.key.toUpperCase());
      } else if (event.key === "Backspace") {
        setText((prev) => prev.slice(0, -1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleLetterClick = (letter) => {
    setText((prev) => prev + letter);
  };

  const handleBackspace = () => {
    setText((prev) => prev.slice(0, -1));
  };

  return (
    <main className="page">
      <section className="card">
        <h1>Alphabet Buttons</h1>

        <p className="subtitle">
          Click letters (or use your keyboard) to build text.
        </p>

        <div className="output">
          {text || "Your text will appear here..."}
        </div>

        <div className="backspace-container">
          <button onClick={handleBackspace}>Backspace</button>
        </div>

        <div className="keys">
          {letters.map((letter) => (
            <button
              key={letter}
              className="key"
              onClick={() => handleLetterClick(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;