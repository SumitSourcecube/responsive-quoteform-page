import React from 'react'
import './Button.scss'
const Button = ({innerText, onClick}) => {
  return (
    <div className='button-component-div'>
        <button className='button-component' onClick={onClick}>{innerText}</button>
    </div>
  )
}

export default Button