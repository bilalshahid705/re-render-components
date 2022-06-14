import React, { useMemo } from "react";

const ApiComponent = ({ firstNumber, secondNumber }) => {
  const result = useMemo(() => {
    console.log("result");
    const resultString = firstNumber + secondNumber;
    return resultString;
  }, [firstNumber, secondNumber]);

  return (
    <div>
      <h3>Result: {result}</h3>
    </div>
  );
};

export default ApiComponent;
