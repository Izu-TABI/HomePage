import React from 'react'

function Hamburger() {
  function addClass() {
    let nav = document.querySelector("#navArea");

    nav.classList.toggle("open");
  }


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

      <div className="toggle-btn" onClick={addClass}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div id="mask"></div>
    </div>
  )
}



export default Hamburger