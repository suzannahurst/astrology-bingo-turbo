import React from "react";

const SagittariusWord = ({ transform, x, y, className, font }) => {
  console.log("rotation", transform);
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
        <text
          font-size={font}
          font-family="WolpePegasus-Regular"
          transform={transform}
          x={x}
          y={y}
          className={className}
        >
          Sag
        </text>
      </svg>
    </>
  );
};

export default SagittariusWord;