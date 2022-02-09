import React from 'react';

const Score = (props) => {
  return (
    <div className='score'>
      <p>{props.score}</p>
    </div>
  );
};

export default Score;