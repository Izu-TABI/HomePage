import React from 'react'
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
        <ul className='home-sns-icon-area'>
            <li className='sns-icon'><a href="https://github.com/Izu-TABI"><img src={GithubIcon} alt="" /></a></li>
            <li className='sns-icon'><a href="https://twitter.com/chicken_dehanai"><img src={twitterIcon} alt="" /></a></li>
            <li className='sns-icon'><a href="https://www.instagram.com/i.masaki14/"><img src={instaIcon} alt="" /></a></li>
            <li className='sns-icon'><a href="https://izu-tabi.hatenablog.com/"><img src={blogIcon} alt="" /></a></li>
        </ul>
    </div>
  )
}

export default Home