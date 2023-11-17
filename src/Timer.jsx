import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [counter, setCounter] = useState(0);
  console.log("I am running");
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => {
        return prev + 1;
      })
    }, 1000);
    //clean up functions
    console.log("created interval with id ", interval);
    return () => {
      // console.log("I was unmounted");
      console.log("removing interval with id ", interval);
      clearInterval(interval);
    }
  }, [])
  return <>
    <span>Current time is: {counter}</span>
    <br />
    {/* <button
      onClick={startTimer}
    >Start Timer</button> */}
  </>
}

export default Timer