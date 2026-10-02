import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { transition } from '../viewTransition'

// ページをなめらかに切り替えるリンク（新しいタブで開くときなどは、普通のリンクとして動く）
function TransitionLink({ to, ...props }) {
  const navigate = useNavigate()

  function handleClick(e) {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    transition(() => {
      navigate(to)
      window.scrollTo(0, 0)
    }, { type: 'page' })
  }

  return <Link {...props} to={to} onClick={handleClick} />
}

export default TransitionLink
