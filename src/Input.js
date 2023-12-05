import React from "react";

const Input = (props) => {
  console.log("input box props are: ", props);
  return <input ref={props.inputRef} type="text" />
}

export default Input;