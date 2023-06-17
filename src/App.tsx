import { useCallback, useEffect, useState } from "react";
import word from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";

function getWord() {
  return word[Math.floor(Math.random() * word.length)];
}
function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessLetters] = useState<string[]>([]);

  // returning the letter which are not in wordToGuess cuz we don't have to show them hangmanWord
  const incorrectLetters = guessedLetters.filter (
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 8;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));
     
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessLetters((currentLetter) => [...currentLetter, letter]);
    },
    [guessedLetters, isLoser, isWinner]
  );
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return; // if user pressed any other key then a to z we won't do anything

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [addGuessedLetter, guessedLetters]);


  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if( key != "Enter") return;

      e.preventDefault();
      setGuessLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

      return () => {
      document.removeEventListener("keypress", handler);
    };  
  },[])

  return (
    <div
      style={{
        width:"100vw"
      }}
    >
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />

      <HangmanWord 
        revel = {isLoser}
        guessedLetters={guessedLetters} 
        wordToGuess={wordToGuess} 
      />
        <Keyboard 
          disabled = {isLoser || isWinner}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetters={addGuessedLetter}
        />
    </div>
  );
}

export default App;
