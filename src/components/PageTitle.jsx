import React from 'react'
import menu from '../menu'

// 各ページのタイトル。メニューの項目と同じ番号・書体にして、メニューとページの見た目をそろえる
function PageTitle({ children }) {
  const index = menu.findIndex((item) => item.label === children)
  return (
    <h2 className="title">
      {index >= 0 && <span className="title-num">{String(index + 1).padStart(2, '0')}</span>}
      {children}
    </h2>
  )
}

export default PageTitle
