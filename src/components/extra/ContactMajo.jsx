import React from 'react'
import MajoCV from '../images/MajoCV.png'

import './Contact.css'
import NavBar from '../nav-bar/NavBar';

function ContactMajo() {
    return (
        <div className="header" id="proj">
            <NavBar/>
            <h1 className='nombre'>MARÍA JOSÉ CASTILLO</h1>
            <div className="thumbnail">
                    <img src={MajoCV}/>

            
                <p className='title'>
                    Hi! I'm a Digital Animation Engineer Student at Universidad Panamericana, Campus GDl.
                    <br></br>
                    My proyects involve illustration, concept art development and 2D animation for videogames, and it's 
                    where I have the most experience. I'm also working as a Pixel Artist at Halberd Studios.
                    <br></br>
                    Social Media: @marijoo.cg
                </p>
            </div>


        </div>
        
    );
}

export default ContactMajo