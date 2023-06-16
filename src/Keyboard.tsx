import styles from "./Keyboard.module.css";

const KEYS = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];


type KeyboardProps  = {
  activeLetters : string[]
  inactiveLetters : string[]
  addGuessedLetters : (letter : string) => void
  disabled : boolean
}

function Keyboard({ activeLetters, inactiveLetters, addGuessedLetters,disabled = false} : KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px,1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inactiveLetters.includes(key);
        return (
            <button 
              onClick={() => addGuessedLetters(key)}  
              className={
                `${styles.btn} ${isActive ? styles.active : ""}  ${isInActive ? styles.inactive : ""}`
              } 
              disabled={isInActive || isActive || disabled}
              key={key}
            >
               {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
