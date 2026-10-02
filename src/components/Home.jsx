import React, { useEffect, useState } from 'react';
import '../HomeAnimation.css';
import Hamburger from './Hamburger';
import { Link } from 'react-router-dom';

function Home() {
  const [Loading, setLoading] = useState(true);
  // ——————————————————————————————————————————————————
  // TextScramble
  // ——————————————————————————————————————————————————

  class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }

  

  const phrases = [
    "Hello,",
    "Izumoi",
    ''
  ]



  useEffect(() => {
    setLoading(false);
  }, [])

  if (!Loading) {
    let counter = 0
    const line = document.getElementById('text')
    const el = document.getElementById('text-scramble')
    const fx = new TextScramble(el)
    const next = () => {
      if ((counter + 1) % phrases.length === 0) {
        // 最後まで出し終えたら printf(""); を取り外す（App.scss の .code-done）
        line.classList.add('code-done')
        return;
      } else {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 800)
        })
        counter = (counter + 1) % phrases.length;
      }
    }
    next()
  }




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
