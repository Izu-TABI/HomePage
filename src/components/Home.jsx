import React, { useEffect } from 'react';
import '../HomeAnimation.css';
import TransitionLink from './TransitionLink';
import TextMorph from '../TextMorph';

const phrases = ['Hello,', 'Izumoi']

// タイトルのアニメーションは最初の1回だけ流す（ほかのページから戻ってきたときは、終わった状態で表示する）
let introPlayed = false

function Home() {
  // 画面が表示されてから、アニメーションを1回だけ動かす
  // （描画の途中で動かすと、開発モードでは2重に動いてチラつく）
  useEffect(() => {
    if (introPlayed) return
    let timer
    const el = document.getElementById('text')
    el.textContent = ''
    const fx = new TextMorph(el)
    const show = (i) => {
      fx.setText(phrases[i]).then(() => {
        if (i + 1 < phrases.length) {
          timer = setTimeout(() => show(i + 1), 800)
        } else {
          introPlayed = true
        }
      })
    }
    show(0)
    return () => {
      fx.stop()
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className={introPlayed ? 'home-main is-back' : 'home-main'} style={{ position: 'relative' }}>
      {/* <h1 className='home-main-title'>Izu-TABI</h1> */}
      <div className="container">
        <div id="text">{introPlayed ? phrases[phrases.length - 1] : ''}</div>

        <div className="profile">
            {/* <p className="profile-affiliation">Informatics and Data Science, Hiroshima University</p> */}
            <p className="profile-affiliation">準学士 / 広島大学 情報科学部</p>
            <p className="profile-lead">
            </p>
            <div className="profile-links">
              <TransitionLink to="/career">Career</TransitionLink>
              <TransitionLink to="/works">Works</TransitionLink>
              <a href="https://github.com/Izu-TABI" target="_blank" rel="noreferrer">GitHub</a>
            </div>
        </div>
      </div>
      <small style={{ color: 'gray', fontSize: '10px', position: 'absolute', bottom: '0', marginBottom: '20px' }}>Copyright © 2026 Izumoi All rights reserved.</small>
    </div>
  )
}

export default Home
