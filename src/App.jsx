import Button from "./Button.jsx";
import Text from "./Text.jsx";
import Timer from "./Timer.jsx";
import ButtonWithTooltip from "./ButtonWithToolTip.jsx";

import React, { useCallback, useEffect, useState } from "react";

const App = () => {
  return <>
    <ButtonWithTooltip
    tooltipContent = {
      <div>
        This tooltip does not fit above the button.
        <br />
        This is why it's displayed below instead!
      </div>
    }
    >
      Hover over me (tooltip above)
    </ButtonWithTooltip>
    
    <div style={{ height: 50 }} />
    <ButtonWithTooltip
      tooltipContent={
        <div>This tooltip fits above the button</div>
      }
    >
      Hover over me (tooltip below)
    </ButtonWithTooltip>
    <div style={{ height: 50 }} />
    <ButtonWithTooltip
      tooltipContent={
        <div>This tooltip fits above the button</div>
      }
    >
      Hover over me (tooltip below)
    </ButtonWithTooltip>
  </>
}

export {App};