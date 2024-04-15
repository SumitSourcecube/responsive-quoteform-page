import React, { useRef } from 'react'
import './Textarea.scss'
const Textarea = () => {
    const textRef = useRef();

    const handleClick = () => {
        textRef.current.focus();
    }
  return (
    <div className='textarea-component-div' onClick={handleClick}>
        <textarea className='textarea-component' ref={textRef}></textarea>
        <div className='placeholder'>
            <span id='placeholder-1'>Order details</span>
            <span id='placeholder-2'>Submit Your Order Information - Item Name, Decoration Size, Quantity, Due Date and any other details</span>
        </div>
        
    </div>
  )
}

export default Textarea