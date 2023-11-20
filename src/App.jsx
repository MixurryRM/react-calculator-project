/* eslint-disable no-eval */
/* eslint-disable eqeqeq */
import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [output, setOutputValue] = useState(0);
  const [input, setInputValue] = useState(0);

  function clickEventHandling(value) {
    if (value == "C") {
      setOutputValue(0);
      setInputValue(0);
    } else if (value == "AC") {
      input.length == 1 ? setInputValue('0') : setInputValue(input.slice(0,input.length - 1));
    } else if (value == "=") {
      setOutputValue(eval(input));
      setInputValue(0);
    } else {
      input == 0 ? setInputValue(value) : setInputValue(input + value);
    }
  }

  return (
    <div className="container">
      <div className="calculator_framwork">
        <Output output={output} />
        <Input input={input} />
        <Button clickEventHandling={clickEventHandling} />
      </div>
    </div>
  );
}

export default App;
