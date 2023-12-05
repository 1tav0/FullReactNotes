import React, { useEffect, useState, useLayoutEffect } from 'react'

const Timer = (props) => {
  const [counter, setCounter] = useState(0);

  const { customText } = props;

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

  useEffect(() => {
    
    return () => {
      console.log("cleaning up second effect for custom text");
    }
  }, [customText])
  
  useLayoutEffect(() => { 
    console.log("running useLayout effect")
  },[])
  return <>
    <span>Current time is: {counter}</span>
    <br />
    <span>{customText}</span>
    <br />
    {/* <button
      onClick={startTimer}
    >Start Timer</button> */}
  </>
}

export default Timer