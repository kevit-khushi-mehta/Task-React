import { useState } from "react"
import Header from "./Header"
import UserInput from "./UserInput"
import Results from "./Results";
function App() {

  const[userInput, setUserInput] = useState({
    initialInvestment: 20000,
    annualInvestment: 5000,
    expectedReturn: 8,
    duration: 9

});

const inputIsValid = UserInput.duration >= 1;

function handleChange(inputIdentifier, newValue){
  setUserInput(prevUserInput=>{
      return{
          ...prevUserInput,
          [inputIdentifier]: +newValue
      }
  })
}

  return (
    <>
    <Header></Header>
    <UserInput userInput={userInput} onChange={handleChange} ></UserInput>
    {!inputIsValid && <p className="center">Please enter a duration greater than 0</p>}
    {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App
