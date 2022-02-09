import React from 'react';
import Die from './Die';

const Dice = (props) => {
  return (
    <div className='dice-container'>
      {props.dice &&
        props.dice.map((die, i) => {
          return (
            <Die
              isRolling={props.isRolling}
              setIsRolling={props.setIsRolling}
              value={die.value}
              locked={die.isLocked}
              id={die.id}
              key={i}
              toggleFreeze={props.toggleFreeze}
            />
          );
        })}
    </div>
  );
};

export default Dice;