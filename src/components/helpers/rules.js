const sum = (dice) => {
  return dice.reduce((previous, current) => previous + current);
};

const frequencies = (dice) => {
  const map = new Map();
  for (let die of dice) {
    map.set(die, (map.get(die) || 0) + 1);
  }
  const frequencies = [];
  for (const value of map.values()) {
    frequencies.push(value);
  }
  return frequencies;
};

const getNumberOfOccurrences = (dice, value) => {
  return dice.filter((dieValue) => dieValue === value).length;
};

const totalOneNumber = {
  evaluate: (dice, value) => {
    return value * getNumberOfOccurrences(dice, value);
  },
};

const sumSameKind = {
  evaluate: (dice, value) => {
    return frequencies(dice).some((counter) => counter >= value)
      ? sum(dice)
      : 0;
  },
};

const fullHouse = {
  evaluate: (dice, score) => {
    if (frequencies(dice).length > 2) {
      return 0;
    } else {
      if (totalOneNumber.evaluate(dice, 4) === 0) {
        return score;
      } else {
        return 0;
      }
    }
  },
};

const straight = {
  evaluateSmall: (dice, score) => {
    const dieSet = new Set(dice);
    if (
      dieSet.has(2) &&
      dieSet.has(3) &&
      dieSet.has(4) &&
      (dieSet.has(1) || dieSet.has(5))
    ) {
      return score;
    }
    if (
      dieSet.has(3) &&
      dieSet.has(4) &&
      dieSet.has(5) &&
      (dieSet.has(2) || dieSet.has(6))
    ) {
      return score;
    }
    return 0;
  },
  evaluateLarge: (dice, score) => {
    const dieSet = new Set(dice);
    return dieSet.size === 5 && (!dieSet.has(1) || !dieSet.has(6)) ? score : 0;
  },
};

const yatzy = {
  evaluate: (dice, score) => {
    return frequencies(dice)[0] === 5 ? score : 0;
  },
};

module.exports = {
  sum,
  frequencies,
  getNumberOfOccurrences,
  totalOneNumber,
  sumSameKind,
  fullHouse,
  straight,
  yatzy,
};
