import { useState } from "react";
export default function Player() {
  const [enteredPlayerName, setEntered] = useState()
  return (
    <section id="player">
      <h2>Welcome unknown entity</h2>
      <p>
        <input type="text" />
        <button>Set Name</button>
      </p>
    </section>
  );
}




 