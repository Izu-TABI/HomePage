import React from 'react';
import '../HomeAnimation.css';
import GithubIcon from '../sns_icons_image/GitHub.png';
import instaIcon from '../sns_icons_image/instagram.png';
import twitterIcon from '../sns_icons_image/Twitter.png';
import blogIcon from '../sns_icons_image/blog_icon.png';
import Hamburger from './Hamburger';
  
function Home() {
  return (
    <div className='home-main'>
        <Hamburger />
        <h1 className='home-main-title'>Izu-TABI</h1>
    </div>
  )
}

export default Home