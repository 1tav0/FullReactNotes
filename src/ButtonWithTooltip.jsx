import React, {useState, useRef} from 'react'
import ToolTip from './ToolTip.jsx';

const ButtonWithTooltip = (props) => {
  const { children, tooltipContent } = props;
  const [targetPositions, setPositions] = useState(null);
  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    const rectangleBoundaries = buttonRef.current.getBoundingClientRect();
    //basically we have received coordinates of the button and we are telling react try to adjust according to those coordinates
    setPositions({
      left: rectangleBoundaries.left,
      top: rectangleBoundaries.top,
      right: rectangleBoundaries.right,
      bottom: rectangleBoundaries.bottom,
    })
  }

  //whenever we move our onPointerEnter inside the button 
  //you get the boundaries of the rectangle and put them in a state variable & pass that to ToolTip which now has to handle where to render on top of bottom in the body cuz we used createPortal 
  return (
    <>
      <button
        ref={buttonRef}
        onPointerEnter={handleMouseEnter}
        onPointerLeave={() => {
          setPositions(null);
        }}
      >
        {children}
      </button>
      {
        targetPositions 
        &&
        <ToolTip targetPositions={targetPositions}>{ tooltipContent }</ToolTip>
      }
    </>
  )
}

export default ButtonWithTooltip
 