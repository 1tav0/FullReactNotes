import React from 'react'

const Button = (props) => {
  const { children, clickAction } = props;
  //this makes the click listener local what about when we have a large set of files and we want to share the component and handle the clickable listener on their side when we make use of it ? 
  const handleClick = () => {
    clickAction?.()
  }
  return (
    <button
      onClick={handleClick}
    >
    {children}
    </button>
  )
}

export default Button