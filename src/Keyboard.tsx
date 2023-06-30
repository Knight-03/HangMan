import styles from "./Keyboard.module.css";
const Rows = [
  ["a", "b", "c", "d", "e", "f", "g"],
  ["h", "i", "j", "k", "l", "m", "n"],
  ["o", "p", "q", "r", "s", "t", "u"],
  ["v", "w", "x", "y", "z", " ↵ "]

];

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetters: (letter: string) => void;
  onEnter : (key : string) => void; 
  disabled: boolean;
};

function Keyboard({
  activeLetters,
  inactiveLetters,
  onEnter,
  addGuessedLetters,
  disabled = false,
}: KeyboardProps) {
  addGuessedLetters,
  disabled = false,
}: KeyboardProps) {
  return (
    <div className={styles.keyboardContainer}>
      {Rows.map((keys, rowIndex) => (
        <div key={rowIndex} className={styles.ColumContainer}>
          {keys.map((key, cellIndex) => (
            <button
              key={cellIndex} 
              onClick={() => {
                {key == " ↵ " ? onEnter(key) : addGuessedLetters(key)}
              }}
              className={`${styles.btn} ${
                activeLetters.includes(key) ? styles.active : ""
              } ${
                inactiveLetters.includes(key) ? styles.inactive : ""
              }`}
              disabled={inactiveLetters.includes(key) || activeLetters.includes(key) || disabled}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
