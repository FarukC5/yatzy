const getTotalScore = () => {
    return localStorage.getItem('total-score');
  };
  
  const setTotalScore = (score) => {
    localStorage.setItem('total-score', score);
  };
  
  const getHighScore = () => {
    return localStorage.getItem('high-score');
  };
  
  const setHighScore = (highScore) => {
    localStorage.setItem('high-score', highScore);
  };
  module.exports = {
    getTotalScore,
    setTotalScore,
    getHighScore,
    setHighScore
  };