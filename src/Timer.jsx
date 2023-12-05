import React, { useEffect, useState, useLayoutEffect, useRef } from 'react'

const Timer = (props) => {
  const [counter, setCounter] = useState(0);

  const { customText } = props;
  const interval = useRef(null);
  //console.log("I am running");
  useEffect(() => {
      interval.current = setInterval(() => {
      setCounter(prev => {
        return prev + 1;
      })
    }, 1000);
    //clean up functions
    console.log("created interval with id ", interval.current);
    return () => {
      // console.log("I was unmounted");
      //console.log("removing interval with id ", interval);
      clearInterval(interval);
    }
  }, [])

  const stopTimer = () => {
    console.log("stopping timer with id", interval.current);
    clearInterval(interval.current);
  }
  return <>
    <span>Current time is: {counter}</span>
    <br />
    <span>{customText}</span>
    <br />
    <button
      onClick={stopTimer}
    >Stop Timer</button>
  </>
}

export default Timer