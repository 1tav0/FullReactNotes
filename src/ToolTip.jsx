import React, {useLayoutEffect, useRef, useState, useEffect} from 'react'
import { createPortal } from 'react-dom';
const ToolTip = (props) => {
  const { children, targetPositions } = props;
  const { left, right, top, bottom } = targetPositions;
  const tooltipRef = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  let x = 0;
  let y = 0;

  //to notice the lag when we use useEffect instead of useLayoutEffect
  let now = performance.now();
  while (performance.now() - now < 400) {
    //render blocking code for 400ms 
  }

  if (targetPositions !== null) {
    x = left;
    y = top - tooltipHeight;
    console.log("the height is", tooltipHeight);
    // if y is negative after subctracting the top and the height of the tooltip then there is not space at the top and tooltip has to be shown at the bottom
    if (y < 0) {
      y = bottom;
    }
  }
  //calculate the height BEFORE the tooltip is RENDERED
  //useLayoutEffect executes before anything is repainted
  useLayoutEffect(() => {
    //to get the height
    const { height } = tooltipRef.current.getBoundingClientRect();
    setTooltipHeight(height);

    console.log('the height is inside effect', height);
  },[])

  
  return createPortal(<div style={{
      position: 'absolute',
      pointerEvents: 'none',
      left: 0,
      top: 0,
      transform: `translate3d(${x}px, ${y}px, 0)`
    }}
    ref={tooltipRef}
    className="tooltip"
    >
      {children}
    </div>, document.body)
}

export default ToolTip