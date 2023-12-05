import Button from "./Button.jsx";
import Text from "./Text.jsx";
import Timer from "./Timer.jsx";
import ButtonWithTooltip from "./ButtonWithToolTip.jsx";
import Input from "./Input.js";
import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  let myLocal = 0;
  const ref = useRef(0);
  const [myCount, setMyCount] = useState(0);
  const inputRef = useRef(null);

  return <>
    <button onClick={() => {myLocal += 1}}>Change local variable</button>
    <button onClick={() => {ref.current += 1}}>Change ref</button>
    <button onClick={() => {setMyCount(prevCount => prevCount+1)}}>Change state</button>

    <div>
      <span>Local var: {myLocal}</span>
      <br />
      <span>ref:{ref.current}</span>
      <br />
      <span>state variable: {myCount}</span>
    </div>

    <h4>Timer Example</h4>
    <Timer>This is my timer</Timer>

    <h4>DOM example</h4>
    <input type="text" ref={inputRef} />
    <button onClick={() => { 
      console.log(inputRef.current.getBoundingClientRect());
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }}>Focus the input textbox</button>
  </>
}

export {App};