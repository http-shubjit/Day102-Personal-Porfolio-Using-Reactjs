import React from 'react'
import './Skills.css'
import uidesign from '../../assets/ui-design.png'
import webdesign from '../../assets/website-design.png'
import appdesign from '../../assets/app-design.png'
const Skills = () => {
  return (
  
    <section id="skills">
     <span className="skilltittle">What i do</span>
<span className="skildescription">Lorem, ipsum dolor.lorem30 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur dolorem qui quam tempore consequatur sequi reiciendis hic dignissimos, mollitia possimus.</span>
<div className="skillbars">
  <div className="skillbar"><img src={uidesign}alt="" className="skillbarimg" />
  <div className="skillbartext">
    <h2>UI/UX Design.</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, dolores.</p>
  </div>
  </div>


  <div className="skillbar"><img src={webdesign}alt="" className="skillbarimg" />
  <div className="skillbartext">
    <h2>Website Design</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nisi.</p>
  </div>
  </div>

  <div className="skillbar"><img src={appdesign}alt="" className="skillbarimg" />
  <div className="skillbartext">
    <h2>App Design</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolorum.</p>
  </div>
  </div>

</div>

    </section>


  )
}

export default Skills