import React, { useRef } from 'react'
import './QuoteForm.scss'
import TextInput from 'components/Inputs/TextInput'
import Textarea from 'components/Inputs/Textarea/Textarea'
import UploadIcon from 'assets/images/icons/upload image icon.png'
import Button from 'components/Inputs/Button'
const QuoteForm = () => {
    const filRef = useRef();
  return (
    <div className='quote-form-container'>
        <div className="quote-form-card">
            <div className="quote-form-image">
                
            </div>
            <div className='quote-form-div'>
                <form className="quote-form">
                        <div className='quote-form-header'>
                            <span id="form-header-text">Get a Quote Now</span>
                            <span id='form-header-text2'>Get a Quote Immediately Upon Form Submission</span>
                        </div>
                    <div className="form-input">
                        <div className="form-text-inputs">
                            <div className="form-fullname">
                                <TextInput placeholder={"Full name"} type={'text'}/>
                            </div>
                            <div className="form-name">
                                <div className="form-fisrt-name">
                                    <TextInput placeholder={"First name"} type={'text'}/>
                                </div>
                                <div className="form-last-name">
                                    <TextInput placeholder={"Last name"} type={'text'}/>
                                </div>
                            </div>
                            <div className="form-email-phone">
                                <div className="form-email-in">
                                    <TextInput placeholder={"Email"} type={'email'}/>
                                </div>
                                <div className="form-phone-in">
                                    <TextInput placeholder={"Phone"} type={'text'}/>
                                </div>
                            </div>
                            <div className="form-email">
                                <TextInput placeholder={"Email adress"} type={'email'}/>
                            </div>
                            <div className="form-phone">
                                <TextInput placeholder={"Phone"} type={'phone'}/>
                            </div>
                            <div className="form-order-detail">
                                <Textarea/>
                            </div>

                            <div className="form-upload">
                                <input type="file" ref={filRef} hidden/>
                                <button className="form-upload-button" onClick={() => filRef.current.click()}>
                                    <span className="form-upload-button-text">Upload file</span>
                                </button>
                            </div>
                        </div>
                        <div className="form-file-input">
                            <input type="file" ref={filRef} hidden/>
                            <button className="form-file-input-button" onClick={() => filRef.current.click()}>
                                <img src={UploadIcon} alt="1" />
                                <span className="form-file-input-button-text">Click to upload</span>
                            </button>
                        </div>
                        
                        <div className="form-submit-button">
                            <Button innerText={'Send Request'} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default QuoteForm