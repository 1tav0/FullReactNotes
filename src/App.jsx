import Button from "./Button.jsx";
import Text from "./Text.jsx";
import React, {useCallback, useEffect, useState} from "react";
const App = () => {
  const [data1, setData1] = useState(0);
  const [data2, setData2] = useState(0);
  useEffect(() => {
    console.log("Data1 changed");
  }, [data1])
  
  useEffect(() => {
    console.log("Data2 changed");
  },[data2])

  return <>
    {data1}
    <button onClick={() => setData1(prev => {
      return prev+1;
    })}>Update 1</button>
    <br />
    <br />
    {data2}
    <button onClick={() => setData2(prev => {
      return prev+1;
    })}>Update 2</button>
  </>
}

export {App};