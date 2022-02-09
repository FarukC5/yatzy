import React, { useState, useEffect } from "react";
import Category from "./Category";
import {
  straight,
  sumSameKind,
  totalOneNumber,
  yatzy,
  fullHouse,
} from "./helpers/rules";
import { getHighScore, getTotalScore, setHighScore } from "./helpers/helpers";

const ScoringCategories = (props) => {
  const [round, setRound] = useState(0);
  const [playAgain, setPlayAgain] = useState(false);

  const dice = props.dice.map((die) => {
    return die.value;
  });

  const incrementRound = () => {
    setRound(round + 1);
  };

  useEffect(() => {
    if (round > 12) {
      if (
        getHighScore() === null ||
        Number(getTotalScore()) > Number(getHighScore())
      ) {
        setHighScore(Number(getTotalScore()));
      }
      setPlayAgain(true);
      props.setRollsLeft(0);
    }
  }, [round, props.setIsRolling, props.setRollsLeft, props]);

  const PlayAgainButton = () => {
    const startNewGame = () => {
      window.location.reload();
    };
    return (
      <div className="newgame">
        <h4>End Game!</h4>
        <button onClick={startNewGame}>PlayAgain</button>
      </div>
    );
  };

  return (
    <div className="categories">
      {playAgain && (
        <div>
          <PlayAgainButton />
        </div>
      )}

      <Category
        name="Ones"
        description="Score 1 for every 1"
        score={totalOneNumber.evaluate(dice, 1)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name="Twos"
        description="Score 2 for every 2"
        score={totalOneNumber.evaluate(dice, 2)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name="Threes"
        description="Score 3 for every 3"
        score={totalOneNumber.evaluate(dice, 3)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name="Fours"
        description="Score 4 for every 4"
        score={totalOneNumber.evaluate(dice, 4)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name="Fives"
        description="Score 5 for every 5"
        score={totalOneNumber.evaluate(dice, 5)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name="Sixes"
        description="Score 6 for every 6"
        score={totalOneNumber.evaluate(dice, 6)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name="3 of Kind"
        description="Sum all dice if 3 are the same"
        score={sumSameKind.evaluate(dice, 3)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name="4 of Kind"
        description="Sum all dice if 4 are the same"
        score={sumSameKind.evaluate(dice, 3)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name="Full House"
        description="Score 25 for full house"
        score={fullHouse.evaluate(dice, 25)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name="Small Straight"
        description="If 4+ values in a row, score 30"
        score={straight.evaluateSmall(dice, 30)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name="Large Straight"
        description="If 5 values in a row, score 40"
        score={straight.evaluateLarge(dice, 40)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name="Yatzy"
        description="If all values matches, score 50"
        score={yatzy.evaluate(dice, 50)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />

      <Category
        name="Chance"
        description="Sum of all dice"
        score={sumSameKind.evaluate(dice, 0)}
        rollAnimation={props.rollAnimation}
        incrementRound={incrementRound}
      />
    </div>
  );
};

export default ScoringCategories;
