import React from "react";

function Options({ values, onClick, isSelected, isCorrect, isAttempted }) {
  const getColor = () => {
    if (!isAttempted) return "white"; // No attempt yet
    if (isSelected) {
      return isCorrect ? "green" : "red";
    }
    return "white"; // Non-selected options remain white
  };

  return (
    <button onClick={onClick} style={{ backgroundColor: getColor() }}>
      {values}
    </button>
  );
}

export default Options;
