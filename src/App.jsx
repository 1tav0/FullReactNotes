import Button from "./Button.jsx";
import React from "react";
const App = () => {
  const handleClickAction = () => {
    console.log("I was clicked from the parent");
  }
  return <Button
    clickAction={handleClickAction}
  >Changed name</Button>
}

export {App};