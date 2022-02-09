import React, { useState, useEffect } from "react";
import Header from "./Header";
import Dice from "./Dice";
import ScoringCategories from "./ScoringCategories";
import { setTotalScore, getHighScore, getTotalScore } from "./helpers/helpers";

const DICE_NUM = 5;
setTotalScore(0);
getHighScore(0);

const Game = () => {
  const [dice, setDice] = useState([]);
  const [isRolling, setIsRolling] = useState(false);
  const [rollsLeft, setRollsLeft] = useState(3);

  useEffect(() => {
    rollAnimation();
  }, []);

  const rollDice = (reset) => {
    if (reset) {
      clearFreeze();
      setRollsLeft(2);
    } else {
      setRollsLeft(rollsLeft > 0 ? rollsLeft - 1 : 0);
    }

    const diceArray = [];
    for (let x = 0; x < DICE_NUM; x++) {
      if (dice[x] && dice[x].isLocked) {
        diceArray.push(dice[x]);
      } else {
        diceArray.push({
          id: String(DICE_NUM + "-" + x),
          isLocked: false,
          value: Math.floor(Math.random() * 6 + 1),
        });
      }
    }
    setIsRolling(false);
    setDice(diceArray);
  };

  const rollAnimation = (reset) => {
    setIsRolling(true);
    setTimeout(() => {
      rollDice(reset);
    }, 1000);
  };

  const toggleFreeze = (id) => {
    let lockedDice = [];
    for (const die of dice) {
      if (die.id === id && !isRolling && rollsLeft > 0) {
        die.isLocked = !die.isLocked;
      }
      lockedDice.push(die);
    }
    setDice(lockedDice);
  };

  const clearFreeze = () => {
    let lockedDice = [];
    for (const die of dice) {
      die.isLocked = false;
      lockedDice.push(die);
    }
    setDice(lockedDice);
  };

  const HighScore = () => {
    return (
      <div className="total-score">
        <h4>High Score:</h4>
        <span>{getHighScore()}</span>
      </div>
    );
  };

  const TotalScore = () => {
    return (
      <div className="total-score">
        <h4>Total Score:</h4>
        <span>{getTotalScore()}</span>
      </div>
    );
  };

  return (
    <div className="game">
      <Header />
      <Dice
        isRolling={isRolling}
        setIsRolling={setIsRolling}
        dice={dice}
        toggleFreeze={toggleFreeze}
      />

      <div>
        <button
          disabled={isRolling === true || rollsLeft === 0}
          onClick={() => rollAnimation()}
          className="roll-button"
        >
          {rollsLeft} Rolls Left
        </button>
      </div>

      <ScoringCategories
        dice={dice}
        rollAnimation={rollAnimation}
        setRollsLeft={setRollsLeft}
      />
      <div className="total">
        <TotalScore />
        {getHighScore() > 0 && <HighScore />}
      </div>
    </div>
  );
};

export default Game;
