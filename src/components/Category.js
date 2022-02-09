import React, { useState } from 'react';
import { getTotalScore, setTotalScore } from './helpers/helpers';
import Rules from './Rules';
import Score from './Score';

const Category = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [scored, setScored] = useState(0);
  
  let onClick = 'category' + (isChecked ? ' onClick' : '');

  return (
    <div
      id={props.name}
      onClick={(event) => {
        if (!isChecked) {
          setIsChecked(true);
          props.incrementRound();
          setScored(props.score);
          setTotalScore(Number(getTotalScore()) + Number(props.score));
          props.rollAnimation(true);
        }
      }}
      className={onClick}
    >
      <p>{props.name}</p>
      {!isChecked && <Rules description={props.description} />}
      {isChecked && <Score score={scored} />}
    </div>
  );
};

export default Category;