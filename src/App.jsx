import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment.js";


import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

export default function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 5.5,
    duration: 10,
  });

  // The square brackets ([ ]) around inputIdentifier signify computed property names,
  // allowing the value of inputIdentifier to be used as the key for the new property.
  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const dataObj = calculateInvestmentResults(userInput);

  return (
    <>
      <Header />
      <UserInput inputValue={userInput} onChange={handleInputChange} />
      <Result resultData={dataObj} />
    </>
  );
}
