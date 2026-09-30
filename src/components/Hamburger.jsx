import React from 'react'
import { Link } from 'react-router-dom';

function Hamburger() {

  function addClass() {
    const nav = document.querySelector("#navArea");
    nav.classList.toggle("open");
  }

  function maskClick() {
    const nav = document.querySelector("#navArea");
    nav.classList.toggle("open");
  }

  return (
    <div id='navArea'>
      <nav>        
        <div id='inner'>
          <div className='links'>
            <Link  to="/">Home</Link>
          </div>
          <div className="links">
            <Link  to="/works">Works</Link>
          </div>
          <div className="links">
            <Link  to="/career">Career</Link>
          </div>
          <div className='links'>
            <a href="https://github.com/Izu-TABI">GitHub</a>
          </div>
          <div className="links">
            <Link  to="/contact">Contact</Link>
          </div>
          

        </div>
      </nav>


      <div className="toggle-btn" onClick={addClass}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div id="mask" onClick={maskClick}></div>
    </div>
  )
}



export default Hamburger
