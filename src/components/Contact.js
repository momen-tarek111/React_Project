import img5 from '../images/scability.png'
import React from 'react';
import '../styles/Contact.css'
import { Element } from 'react-scroll';
function Contact(){
    return(
        <Element name="Contact">
            <div className="contact_section py-5 mt-5">
                <div  className="container">
                    <div className="row mb-5">
                        <div className="col-lg-6 col-12">
                            <div className='d-flex h-100 justify-content-center align-items-center'>
                                <div className="img-form w-100 ">
                                    <img src={img5}></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className='d-flex h-100 align-items-center'>
                                <form className='w-100'>
                                    <div className='header_form mb-5'>
                                        <h2>Get in Touch</h2>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-6'>
                                            <div className='input-container'>
                                                <input placeholder='First Name' type='text' className='form-control'></input>
                                            </div>
                                        </div>
                                        <div className='col-6 '>
                                            <div className='input-container'>
                                                <input placeholder='Last Name' type='text' className='form-control'></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className='col-6 '>
                                            <div className='input-container'>
                                                <input placeholder='ُEmail' type='email' className='form-control'></input>
                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className='input-container '>
                                                <input placeholder='Phone No.' type='text' className='form-control'></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row mb-4'>
                                        <div className='col-12'>
                                            <div className='input-container '>
                                                <textarea placeholder='Message' rows="7" className='form-control'></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mb-5'>
                                        <div className='button-form'>
                                            <button className='btn'> Send </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
        
    )
}
export default Contact