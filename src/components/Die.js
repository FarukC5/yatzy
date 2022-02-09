import React from "react";

const Die = (props) => {
  const getImageSrc = (number) => {
    return `/images/${number}.png`;
  };

  let dieClass =
    "die" +
    (props.isRolling && !props.locked ? " die-roll" : "") +
    (props.locked ? " die-selected " : "");

  return (
    <div>
      <img
        onClick={() => props.toggleFreeze(props.id)}
        className={dieClass}
        src={getImageSrc(props.value)}
        alt="pic"
      />
    </div>
  );
};

export default Die;
