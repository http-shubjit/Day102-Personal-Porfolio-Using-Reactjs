import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
import bg from '../../assets/image.jpeg'
import btnimg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
      <div className="intrcontent">
        <span className="hello">Hello</span>
        <span className="introtext">I'm <span className="introname">Raka</span> <br /> Website Designer </span>
        <p className="intropara">i am a skilled website designer and devloper and i make  <br />responsive website...</p>

        <Link> <button className="btn"><img src={btnimg} alt="" className='btnimg' />Hire Me</button></Link>
      </div>

      <img src={""} alt="profile" className="bg" />

    </section>
  )
}

export default Intro