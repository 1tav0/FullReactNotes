import Button from "./Button.jsx";
import Text from "./Text.jsx";
import React, {useState} from "react";
const App = () => {

  const [data, setData] = useState([
    { id: "1", text: "a" },
    { id: "2", text: 'b' },
    { id: "3", text: 'c' },
    { id: "4", text: 'd' },
    { id: "5", text: 'e' }
  ])

  const addMoreData = () => {
    setData(prev => [
      ...prev,
      {id: "6", text: "f" }
    ])
  }
  return <>
    {
      data.map((item, index) => (
        <Text key={item.id}>{ item.text }</Text>
      ))
    }
    <Button clickAction={addMoreData}>Add More Data</Button>
  </>
}

export {App};