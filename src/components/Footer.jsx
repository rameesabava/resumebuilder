import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";

function Footer() {
  return (
    <div style={{ backgroundColor: '#7b5c44', padding:'10px' }} className='text-center text-light'>
      <h2>Contact Us</h2>
      <p><MdAttachEmail /><span style={{margin:'2px'}}>resumebuilder@gmail.com</span></p>
      <p><FaPhoneAlt /><span style={{margin:'2px'}}>9087654321</span></p>

      <h3>Connect With Us</h3>
      <div style={{gap:'10px'}} className='d-flex justify-content-center fs-4'><FaWhatsapp /><FaFacebook /><FaInstagram /></div>

      <p style={{margin:'20px'}}>Designed & built with <BsFillSuitHeartFill className='text-danger' /> using React</p>

    </div>
  )
}

export default Footer