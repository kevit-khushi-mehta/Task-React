import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

function App() {
  log('<App /> rendered');

  // const [enteredNumber, setEnteredNumber] = useState(0);
  const [chosenCount, setChosenCount] = useState(0);

  // function handleChange(event) {
  //   setEnteredNumber(+event.target.value);
  // }

  // function handleSetClick() {
  //   setChosenCount(enteredNumber);
  //   setEnteredNumber(0);
  // }

  function handleSetCount(newCount){
    setChosenCount(newCount);
    setChosenCount((prevChosenCount)=> prevChosenCount +1);
    // console.log(chosenCount);
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount}></ConfigureCounter>
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={0}></Counter>
      </main>
    </>
  );
}

export default App;
