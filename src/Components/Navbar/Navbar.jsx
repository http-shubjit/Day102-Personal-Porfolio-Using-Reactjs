import React, { useState } from 'react'
import "./Navbar.css"
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import contactimg from '../../assets/contact.png'
import menu from '../../assets/menu.png'


const Navbar = () => {
const[showmenu,setshowmenu]=useState(false)

  return (
   <nav className="navbar">
    <img src={logo} alt="" className='logo'/>

    <div className="desktopmenu">
<Link activeClass='active' to='intro' spy={true} offset={-100} smooth={true} duration={500} className="desktopmenulistitem">Home</Link>
<Link activeClass='active' to='skills' spy={true} offset={-50} smooth={true} duration={500}className="desktopmenulistitem">About</Link>
<Link activeClass='active' to='works' spy={true} offset={-50} smooth={true} duration={500}className="desktopmenulistitem">Portfolio</Link>
<Link activeClass='active' to='clients' spy={true} offset={-50} smooth={true} duration={500}className="desktopmenulistitem">Clients</Link>

    </div>

    <button className="desktopmenubtn" onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior:"smooth"})
    }} >
<img src={contactimg} alt="" className="desktopmenubtnimg" />Contact Me  </button>

<img src={menu} alt="menu" className='mobilemenu' onClick={()=>setshowmenu(!showmenu)}/>
    <div className="navmenu" style={{display:showmenu?'flex':'none'}}>
<Link activeClass='active' to='intro' spy={true} offset={-100} smooth={true} duration={500} className="listitem" onClick={()=>setshowmenu(false)}>Home</Link>
<Link activeClass='active' to='skills' spy={true} offset={-50} smooth={true} duration={500}className="listitem" onClick={()=>setshowmenu(false)}>About</Link>
<Link activeClass='active' to='works' spy={true} offset={-50} smooth={true} duration={500}className="listitem" onClick={()=>setshowmenu(false)}>Portfolio</Link>
<Link activeClass='active' to='clients' spy={true} offset={-50} smooth={true} duration={500}className="listitem" onClick={()=>setshowmenu(false)}>Clients</Link>
<Link activeClass='active' to='contact' spy={true} offset={-50} smooth={true} duration={500}className="listitem" onClick={()=>setshowmenu(false)}>Contact</Link>

    </div>


  

   </nav>
  )
}

export default Navbar