import React, {memo, useEffect} from "react";

const Text = memo((props) => {
  const { children, externalData } = props;

  useEffect(() => {
    console.log("external data changed", externalData);
  }, [externalData])

  return <div>
    {externalData}
    {children}
  </div>
})

export default Text;