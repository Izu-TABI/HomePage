// 文字を1文字ずつ、ぼかしながら次の文字へなめらかに移り変わらせるアニメーション
// 左から順に少しずつずらして動かすので、波が流れるように切り替わる（トップのタイトルで使っている）
// 文字ごとに幅が違うので、1文字分の枠の幅も前の文字から次の文字の幅へなめらかに変え、全体がガタつかないようにしている
class TextMorph {
  // duration: 1文字が移り変わる時間（ms） / stagger: となりの文字が動き始めるまでの間隔（ms）
  constructor(el, { duration = 700, stagger = 70 } = {}) {
    this.el = el
    this.duration = duration
    this.stagger = stagger
    this.animations = []
  }
  setText(newText) {
    const oldText = this.el.textContent
    const length = Math.max(oldText.length, newText.length)
    this.stop()
    this.el.textContent = ''
    const changes = []
    for (let i = 0; i < length; i++) {
      // 1文字分の枠。新しい文字で幅を取り、前の文字はその上に重ねて消していく
      const slot = document.createElement('span')
      slot.className = 'morph-slot'
      const next = document.createElement('span')
      next.textContent = newText[i] || ''
      slot.appendChild(next)
      this.el.appendChild(slot)
      // 同じ文字はそのまま残し、まわりの文字だけを移り変わらせる
      if (oldText[i] === newText[i]) continue
      let prev = null
      if (oldText[i]) {
        prev = document.createElement('span')
        prev.className = 'morph-prev'
        prev.textContent = oldText[i]
        slot.appendChild(prev)
      }
      changes.push({ i, slot, prev, next })
    }
    // 全部の文字を並べてから、前の文字と次の文字の幅を測る
    const widths = changes.map(({ prev, next }) => [
      prev ? prev.getBoundingClientRect().width : 0,
      next.getBoundingClientRect().width,
    ])
    changes.forEach(({ i, slot, prev, next }, k) => {
      const timing = {
        duration: this.duration,
        delay: i * this.stagger,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        fill: 'both',
      }
      if (prev) {
        const [from, to] = widths[k]
        if (from !== to) {
          this.animations.push(slot.animate([{ width: `${from}px` }, { width: `${to}px` }], timing))
        }
        this.animations.push(prev.animate([
          { opacity: 1, filter: 'blur(0)', transform: 'none' },
          { opacity: 0, filter: 'blur(6px)', transform: 'translateY(-0.2em)' },
        ], timing))
      }
      this.animations.push(next.animate([
        { opacity: 0, filter: 'blur(6px)', transform: 'translateY(0.2em)' },
        { opacity: 1, filter: 'blur(0)', transform: 'none' },
      ], timing))
    })
    const finished = Promise.all(this.animations.map((animation) => animation.finished))
    return new Promise((resolve) => {
      finished.then(() => {
        this.el.textContent = newText
        resolve()
      }, () => {
        // 途中で止めたとき（stop）は何もしない
      })
    })
  }
  stop() {
    this.animations.forEach((animation) => animation.cancel())
    this.animations = []
  }
}

export default TextMorph
