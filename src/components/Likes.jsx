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

            <div className="contents">

                <ul className="likes-list">
                    <li>Apple</li>
                    <li>Computer</li>
                    <li>JavaScript</li>
                    <li>Web</li>
                    <li>RealForce</li>
                    <li>Anime</li>
                    <li>BUMP OF CHICKEN</li>
                </ul>
            </div>
        </div>
    </>

  )
}

export default Likes