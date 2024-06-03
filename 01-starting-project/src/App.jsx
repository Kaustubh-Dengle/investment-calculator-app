import { useState } from "react";
import Input from "./components/Input"
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturns: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Input userInput = {userInput} onChange ={handleChange}/>
      {inputIsValid && <Results input = {userInput}/>}
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
    </>
    
    
  )
}

export default App;
