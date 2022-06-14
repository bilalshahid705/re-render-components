import React, { useState } from "react";
import Loading from "./components/loading-component";
import TableComponent from "./components/table-component";
import ApiComponent from "./components/api-component";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  console.log("isLoading", isLoading);

  return (
    <div className="App">
      <Loading setIsLoading={setIsLoading} />
      <TableComponent isLoading={isLoading} />
      <ApiComponent firstNumber="AI" secondNumber="Work" />
    </div>
  );
}

export default App;
