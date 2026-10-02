import { flushSync } from 'react-dom'

// 画面の切り替え（ページ・テーマ）を、View Transitions API でなめらかにつなぐ
// type: 'page' を付けると、ページ用の切り替え方（前のページを先に消してから次を出す）になる（App.scss）
// 対応していないブラウザでは、アニメーションなしでそのまま切り替える
export function transition(update, { type } = {}) {
  if (!document.startViewTransition) {
    update()
    return
  }
  const root = document.documentElement
  if (type) root.classList.add(`vt-${type}`)
  const view = document.startViewTransition(() => flushSync(update))
  // 画面が裏に隠れているときや、切り替えが重なったときは、アニメーションだけが省かれる（切り替え自体は行われる）
  view.ready.catch(() => {})
  view.finished.finally(() => {
    if (type) root.classList.remove(`vt-${type}`)
  })
}
