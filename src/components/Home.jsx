import React from 'react';
import '../HomeAnimation.css';
import Hamburger from './Hamburger';
  
function Home() {
  return (
    <div className='home-main' style={{position: 'relative'}}>
        <Hamburger />
        <h1 className='home-main-title'>Izu-TABI</h1>
          <small style={{color: 'gray', fontSize: '10px', position: 'absolute', bottom: '0', marginBottom: '6px'}}>Copyright © 2023 Izu-TABI All rights reserved.</small>
    </div>
  )
}

export default Home