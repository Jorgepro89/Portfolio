import React, { Component } from 'react';
import './NavBar.css';
import {IconButton} from '@mui/material';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import {Close} from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default class NavBar extends Component {

    constructor(props){
        super(props);
    
        const maxHeight = window.innerHeight - 50;
        const scrollToTop = (Math.min(window.scrollY, maxHeight) / maxHeight);
        this.state = {scrollToTop: scrollToTop, openMenu: false};
        this.onScroll = this.onScroll.bind(this);
      }
    
      onScroll()  {
    
        const maxHeight = window.innerHeight - 50;
    
        const scrollTotop = (Math.min(window.scrollY, maxHeight) / maxHeight);
    
        this.setState({scrollToTop: scrollTotop});
      }
    
      componentDidMount() {
          document.addEventListener('scroll', this.onScroll);
      };
    
      componentWillUnmount() {
          document.removeEventListener('scroll', this.onScroll);
      }

      handleOnClick = () =>{
        this.setState({openMenu: !this.state.openMenu});
      }

    render() {

        const {scrollToTop} = this.state;

        return (
        <div className='nav-bar' style={{backgroundColor: 'rgba(0, 0, 0, ' + scrollToTop+')', boxShadow: `0 2px 20px 0px rgba(0,0, 0, ${(scrollToTop * 0.25)})`}}>
            <Link to='/main'>
                <h1>Portfolio</h1>
            </Link>
            
            <div className={'nav-bar-btns' + (this.state.openMenu ? ' opened': '')}>
                <IconButton className="menu-icon" onClick={this.handleOnClick}>
                    <Close/>
                </IconButton>
                <Link to='/contactMajo'>
                    <NavBarBtn>Contact Majo</NavBarBtn>
                </Link>
                <Link to='/contactJorge'>
                    <NavBarBtn>Contact Jorge</NavBarBtn>
                </Link>
            </div>
            <IconButton className="menu-icon" onClick={this.handleOnClick}>
                <MenuSharpIcon/>
            </IconButton>
        </div>
        )
    }
}

function NavBarBtn({children}) {
    return(
        <div className='nav-bar-btn'>
            {children}
        </div>
    )
}