import { useState, useEffect } from "react";
import styles from "./PopUp.module.css";
import PartyGif from "./Images/Party.gif";

type PopUpProps = {
  isWinner: boolean;
  isLoser: boolean;
  NewGame: () => void;
};

function PopUp({ isWinner, isLoser, NewGame }: PopUpProps) {
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [showLoserModal, setShowLoserModal] = useState(false);

  useEffect(() => {
    if (isWinner) {
      setShowWinnerModal(true);
    } else if (isLoser) {
      setShowLoserModal(true);
    }
  }, [isWinner, isLoser]);

  const closeModal = () => {
    setShowWinnerModal(false);
    setShowLoserModal(false);
    NewGame();
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key != "Enter") return;

      e.preventDefault();
      setShowWinnerModal(false);
      setShowLoserModal(false);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div>
      {showWinnerModal && (
        <div className={`${styles.modalContainer} ${styles.blurBackground}`}>
          <div className={styles.modalContent}>
            <h2>
              You Won
              <img src={PartyGif} alt="Congratulations GIF" />
              Congratulations! <br />
              Press Enter to Start Again
            </h2>
            <button onClick={closeModal}>Enter</button>
          </div>
        </div>
      )}

      {showLoserModal && (
        <div className={`${styles.modalContainer} ${styles.blurBackground}`}>
          <div className={styles.modalContent}>
            <h2>
              You Lost! 💀 <br /> Press Enter to Start Again
            </h2>
            <button onClick={closeModal}>Enter</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopUp;
