import React from 'react'
import './TextInput.scss'

const TextInput = ({placeholder, type}) => {
  return (
    <div className='input-component-tag'>
        <input type={type} className={'input-text-component'} placeholder={placeholder}/>
    </div>
  )
}

export default TextInput