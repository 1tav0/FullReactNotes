import Button from "./Button.jsx";
import Text from "./Text.jsx";
import Timer from "./Timer.jsx";
import React, {useCallback, useEffect, useState} from "react";
const App = () => {
  const [showTimer, setShowTimer] = useState(true);
  
  return <>
    {
      showTimer 
      &&
      <Timer customText="This is custom text"/>
    }
    <button
      onClick={() => setShowTimer(!showTimer)}
    >Remove timer from app</button>
  </>
}

export {App};