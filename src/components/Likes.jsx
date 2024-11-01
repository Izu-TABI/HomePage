import React from 'react'
import Hamburger from './Hamburger'


function Likes() {
  return (
    <>
      <div className="main">
        <Hamburger />
        <h2 className="title">
          Likes
        </h2>

        <div className="contents" style={{ display: 'flex', justifyContent: 'center' }}>

          <ul className="likes-list">
            <li><a href="https://www.apple.com/">Apple</a></li>
            <li><a href="https://developer.mozilla.org/ja/docs/Learn/JavaScript/First_steps/What_is_JavaScript">JavaScript</a></li>
            <li>Web</li>
            <li><a href="https://www.realforce.co.jp/">REALFORCE</a></li>
            <li><a href="https://www.bumpofchicken.com/">BUMP OF CHICKEN</a></li>
          </ul>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          </div>
        </div>
      </div>
    </>

  )
}

export default Likes
