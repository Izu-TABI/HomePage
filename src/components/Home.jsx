import React from 'react'
import GithubIcon from '../sns_icons_image/GitHub.png';
import instaIcon from '../sns_icons_image/instagram.png';
import twitterIcon from '../sns_icons_image/Twitter.png';
import blogIcon from '../sns_icons_image/blog_icon.png';
import Hamburger from './Hamburger';
class Home extends React {
  
  render() {
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

  scrollAnimation() {
    ScrollReveal().reveal('.home-main', { 
      duration: 800, // アニメーションの完了にかかる時間
      viewFactor: 0.2, // 0~1,どれくらい見えたら実行するか
      reset: false   // 何回もアニメーション表示するか
    });
    ScrollReveal().reveal('.main-title', { delay: 200, origin: "left" });
  }


  
}

export default Home