import React, {useState} from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggle = ()=>{
        setShowMenu(!showMenu);
    }
  return (
    <nav className='container-navbar'>
        <div className="logo"> 
        <h1> Hillar<span>Y.</span> </h1>
        </div>
        <menu>
            <ul className="nav-links" id={showMenu ? "nav-links-mobile": "nav-links-hidden"}>
            <li><a href="#">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#download">Download</a></li>
            <li><a href="#subscribe">Subscribe</a></li>
            <li className='nav-btnn'><a href="#faq" className='btn'>Get Started</a></li>
            </ul>

        </menu>
        <div className="menu-icon" onClick={toggle}>
            {
                showMenu ? <GrClose color='black' className='icons' size={27}/> : <GiHamburgerMenu color='black' size={27}/>
            }

        </div>
    </nav>
  )
}

export default Navbar