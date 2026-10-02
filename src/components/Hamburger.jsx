import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import menu from '../menu';
import { transition } from '../viewTransition';

function Hamburger() {
  const [open, setOpen] = useState(false);
  // ページを移るときは、画面全体の切り替え（viewTransition.js）に任せて、メニュー自身はフェードせずに一瞬で閉じる
  // （メニューが自分でもフェードすると、次のページの上にメニューが残って二重に見える）
  const [instant, setInstant] = useState(false);
  const navigate = useNavigate();

  // Esc キーでも閉じる
  useEffect(() => {
    if (!open) return;
    function closeOnEscape(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  // 項目以外の背景をクリックしたら閉じる
  function closeOnBackground(e) {
    if (e.target === e.currentTarget) setOpen(false);
  }

  // メニューから選んだページへ、なめらかに切り替える
  function goTo(e, to) {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    transition(() => {
      setInstant(true);
      setOpen(false);
      navigate(to);
      window.scrollTo(0, 0);
    }, { type: 'page' });
  }

  return (
    <div id='navArea' className={[open && 'open', instant && 'instant'].filter(Boolean).join(' ')}>
      <nav onClick={closeOnBackground}>
        <ul className="nav-list">
          {menu.map((link, i) => {
            const content = (
              <>
                <span className="nav-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="nav-label">{link.label}</span>
              </>
            );
            return (
              <li key={link.label}>
                {link.href
                  ? <a href={link.href} aria-label={link.label}>{content}</a>
                  : <NavLink to={link.to} end onClick={(e) => goTo(e, link.to)} aria-label={link.label}>{content}</NavLink>}
              </li>
            );
          })}
        </ul>
      </nav>

      <button
        type="button"
        className="toggle-btn"
        onClick={() => {
          setInstant(false);
          setOpen(!open);
        }}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span></span>
        <span></span>
      </button>

      <ThemeToggle />
    </div>
  )
}



export default Hamburger
