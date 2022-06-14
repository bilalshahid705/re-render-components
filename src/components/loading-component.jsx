import React from "react";

const Loading = ({ setIsLoading }) => {
  return (
    <div>
      <button onClick={() => setIsLoading(true)}>Show Table</button>
    </div>
  );
};

export default Loading;
