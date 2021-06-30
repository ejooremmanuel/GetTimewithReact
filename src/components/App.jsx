import React, { useState } from "react";

function App() {
  var time = new Date().toLocaleTimeString();
  const [newtime, timeChange] = useState(time);
  let getTime = () => {
    timeChange(new Date().toLocaleTimeString());
  };
  return (
    <div className="container">
      <h1>{newtime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
