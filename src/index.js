import React from "react";
import ReactDOM from "react-dom/client";

const isMorning = true;
const morningText = "Good Morning";
const afterNoonText = "Good Afternoon"; 

const handleClick = (state) => {
  console.log('I was clicked', state);
}

const morningElement = <div>{morningText} <span
  onClick={()=>handleClick(morningText)}
>it is 8am</span></div>
const afterNoonElement = <div>{afterNoonText} it is 6pm</div>
const greetingElement = isMorning ? morningElement : afterNoonElement

//a component returns react elements
const GreetingComponent = function () {
  return <>
    {greetingElement}
    i am inside component
  </>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(GreetingComponent());