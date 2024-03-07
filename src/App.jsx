import { useState } from "react";

import Header from "./components/Header.jsx";
import InvestmentInput from "./components/InvestmentInput.jsx";
import Results from "./components/Results.jsx";

const INVESTMENT = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(INVESTMENT);

  const isValid = userInput.duration >= 1;

  function handleChangeInvestmentValues(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: Number(newValue),
      };
    });
  }

  return (
    <>
      <Header />
      <InvestmentInput
        onChangeInvestment={handleChangeInvestmentValues}
        userInputValues={userInput}
      />
      {isValid && <Results userInputValues={userInput} />}
      {!isValid && (
        <p className="center">Please enter a valid number for duration</p>
      )}
    </>
  );
}

export default App;
