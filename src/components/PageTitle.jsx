import React from 'react'

// 各ページのタイトル。メニューの項目と同じ文字の大きさ・太さにして、メニューとページの見た目をそろえる
function PageTitle({ children }) {
  return <h2 className="title">{children}</h2>
}

export default PageTitle
