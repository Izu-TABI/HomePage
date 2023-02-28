import React from 'react';
import '../HomeAnimation.css';
import GithubIcon from '../sns_icons_image/GitHub.png';
import instaIcon from '../sns_icons_image/instagram.png';
import twitterIcon from '../sns_icons_image/Twitter.png';
import blogIcon from '../sns_icons_image/blog_icon.png';
import Hamburger from './Hamburger';
  
function Home() {
  return (
    <div className='home-main' style={{position: 'relative'}}>
        <Hamburger />
        <h1 className='home-main-title'>Izu-TABI</h1>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <small style={{color: 'gray', fontSize: '10px', position: 'absolute', bottom: '0', marginBottom: '6px'}}>Copyright © 2023 Izu-TABI All rights reserved.</small>
        </div>
    </div>
  )
}

export default Home