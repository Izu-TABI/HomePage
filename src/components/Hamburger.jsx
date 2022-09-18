import React from 'react'

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
        <div className="inner">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Likes</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Activities</a></li>
          </ul>
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