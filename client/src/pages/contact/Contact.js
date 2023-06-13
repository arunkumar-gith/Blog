import React from 'react';
import "./contact.css";
import Sidebar from '../../components/sidebar/Sidebar';


const Contact = () => {
  return (
    <>
        <div className='contact'>
        <div className='content'>

            <h1>Contact The Author</h1>
            <p>Name: Arun Kumar</p>
            <p>Email: kumar.arun52244@gmail.com</p>
            <p>Mob:945855XXXX</p>
        </div>
        </div>
        <Sidebar />
    </>
  )
}

export default Contact;