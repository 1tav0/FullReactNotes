import Button from "./Button.jsx";
import Text from "./Text.jsx";
import React, {useState} from "react";
const App = () => {
  const [message, setMessage] = useState("Hello user, good morning");

  const changeMessage = () => {
    //to showcase asynchronouity
    console.log("before update", message);
    setMessage(prevData => {
      console.log("previous message was", prevData);
      return "Hello user, good afternoon";
    });
    console.log("After update", message);
  }

  return <>
    <div>{message}</div>
    <Button clickAction={changeMessage}>Change message</Button>
  </>
}

export {App};