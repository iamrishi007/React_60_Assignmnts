
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div style={{ margin: "auto 10px", padding: "10px", fontSize:"25px"}}>
        <h1 style={{ margin: "auto 10px", padding: "10px" }}>{count}</h1>
        <button style={{ margin: "auto 10px", padding: "10px" }} onClick={() => setCount(count + 1)}>+</button>
        <button style={{ margin: "auto 10px", padding: "10px" }} onClick={() => setCount(count - 1)}>-</button>
      </div>
    </>
  )
}

export default App;
