import { useState } from "react";
import CountDecrement from "./CountDecrement";
import CountIncrement from "./CountIncrement";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const countChange = (val) => {
    if (val === 1) setCount(count + 1);
    else setCount(count - 1);
  };
  return (
    <div className="App">
      <h1>Count :{count}</h1>
      <CountIncrement change={countChange} />
      <CountDecrement change={countChange} />
    </div>
  );
}
