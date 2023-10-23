import React from 'react'
import JorgeCV from '../images/JorgeCV.png'
import './Contact.css'
import NavBar from '../nav-bar/NavBar';

function ContactJorge() {
    return (
        <div className="header" id="proj">
            <NavBar/>
            <h1 className='nombre'>JORGE VARGAS GONZALEZ</h1>
            <div className="thumbnail">
                    <img src={JorgeCV}/>

            
                <p className='title'>
                    Hi! I'm a System Graphics and Computer Engineer Student at Universidad Panamericana, Campus GDl.
                    <br></br>
                    As a student of systems engineering and computer graphics, I am passionate about programming and new technologies. Open to learn new things and give all my knowledge learned so far.
                    <br></br>
                </p>
            </div>


        </div>
        
    );
}

export default ContactJorge