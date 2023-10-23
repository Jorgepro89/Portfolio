import React from 'react';
//import { Link } from 'react-router-dom';
import NavBar from '../nav-bar/NavBar';
import Cards from '../cards/Cards';
import './Main.css'

function Main() {
  return (
    <div className="App">
      <NavBar/>
      <div className='banner'>
        <h1>"We are programmers We are animators"</h1>
        <br/>
      </div>
      <div className='cartas'>
        <Cards/>
      </div>
      
    </div>
  );
}

export default Main;
