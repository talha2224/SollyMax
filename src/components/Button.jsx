import React from 'react'

const Button = ({title,className,onClick,style}) => {
  return (
    <button style={style} className={className} onClick={onClick}>{title}</button>
  )
}

export default Button
