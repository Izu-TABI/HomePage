import React from 'react'

function Hamburger() {
  return (
    <div id='navArea'>
      <nav>
        <div className="inner">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Skill</a></li>
            <li><a href="#">Work</a></li>
          </ul>
        </div>
      </nav>


      <div className="toggle-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="mask"></div>
    </div>
  )
}

export default Hamburger