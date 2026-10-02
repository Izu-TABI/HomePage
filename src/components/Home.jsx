import React, { useEffect } from 'react';
import '../HomeAnimation.css';
import Hamburger from './Hamburger';
import { Link } from 'react-router-dom';
import TextScramble from '../TextScramble';

const phrases = [
  "Hello,",
  "Izumoi",
  ''
]

function Home() {
  // 画面が表示されてから、アニメーションを1回だけ動かす
  // （描画の途中で動かすと、開発モードでは2重に動いてチラつく）
  useEffect(() => {
    let counter = 0
    let timer
    const line = document.getElementById('text')
    const el = document.getElementById('text-scramble')
    el.textContent = ''
    const fx = new TextScramble(el)
    const next = () => {
      if ((counter + 1) % phrases.length === 0) {
        // 最後まで出し終えたら printf(""); を取り外す（App.scss の .code-done）
        line.classList.add('code-done')
        return;
      } else {
        fx.setText(phrases[counter]).then(() => {
          timer = setTimeout(next, 800)
        })
        counter = (counter + 1) % phrases.length;
      }
    }
    next()
    return () => {
      fx.stop()
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className='home-main' style={{ position: 'relative' }}>
      <Hamburger />
      {/* <h1 className='home-main-title'>Izu-TABI</h1> */}
      <div className="container">
        {/* printf(""); はアニメーション中だけ表示して、終わったら取り外す */}
        <div id="text">
          <span className="code-line">
            <span className="code-wrap code-open" aria-hidden="true"><span className="code-func">printf</span>{'("'}</span>
            <span id="text-scramble"></span>
            <span className="code-wrap code-close" aria-hidden="true">{'");'}</span>
          </span>
        </div>

        <div className="profile">
            <p className="profile-affiliation">Informatics and Data Science, Hiroshima University</p>
            <p className="profile-lead">
            </p>
            <div className="profile-links">
              <Link to="/career">Career</Link>
              <Link to="/works">Works</Link>
              <a href="https://github.com/Izu-TABI" target="_blank" rel="noreferrer">GitHub</a>
            </div>
        </div>
      </div>
      <small style={{ color: 'gray', fontSize: '10px', position: 'absolute', bottom: '0', marginBottom: '20px' }}>Copyright © 2026 Izumoi All rights reserved.</small>
    </div>
  )
}

export default Home
