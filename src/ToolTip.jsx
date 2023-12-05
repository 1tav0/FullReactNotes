import React from 'react'
import { createPortal } from 'react-dom';
const ToolTip = (props) => {
  const { children, targetPositions: {left,right,top,bottom}} = props;
  return createPortal(
    <div style={{
      position: 'absolute',
      pointerEvents: 'none',
      left: 0,
      top: 0,
      transform: `translate3d(${x}px, ${y}px, 0)`
    }}
    >
      {children}
    </div>, document.body)
}

export default ToolTip