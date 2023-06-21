type HangmanWordProps = {
    guessedLetters : string[]
    wordToGuess : string
    revel? : boolean
}

function HangmanWord({ guessedLetters, wordToGuess , revel = false} : HangmanWordProps) {

    return (
        <div    
            style={{
                display:"flex",
                flexDirection:"row",
                gap:".25em",
                position:"absolute",
                left:"700px",
                top:"60px",

                fontSize:"6rem",
                fontWeight: "bold",
                color:"#018793",
                textTransform:"uppercase",
            }}
        >
            {wordToGuess.split("").map((letter,index)=> (
                <span style={{borderBottom:".1em solid #018c98"}} key={index}>
                    <span
                    style={{
                        visibility: guessedLetters.includes(letter) || revel ? "visible" : "hidden",
                        color : !guessedLetters.includes(letter) && revel ? "red" : "#018c98"
                     }}
                    >{letter}
                     </span>
                </span>
            ))}    
        </div>
    );
}

export default HangmanWord;