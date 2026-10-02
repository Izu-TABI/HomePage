import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import TextScramble from '../TextScramble';

// メニューの項目（GitHub だけ外部リンク）
const links = [
  { label: 'Home', to: '/' },
  { label: 'Works', to: '/works' },
  { label: 'Career', to: '/career' },
  { label: 'GitHub', href: 'https://github.com/Izu-TABI' },
  { label: 'Contact', to: '/contact' },
]

function Hamburger() {
  const [open, setOpen] = useState(false);
  const labels = useRef([]);

  // 開いたら、項目の文字をトップのタイトルと同じようにスクランブルさせながら、上から順番に出す
  useEffect(() => {
    if (!open) return;
    const effects = labels.current.map((el) => new TextScramble(el, 10));
    effects.forEach((fx) => {
      fx.el.textContent = '';
    });
    const timers = effects.map((fx, i) =>
      setTimeout(() => fx.setText(links[i].label), 100 + i * 60)
    );
    return () => {
      timers.forEach(clearTimeout);
      effects.forEach((fx, i) => {
        fx.stop();
        fx.el.textContent = links[i].label;
      });
    };
  }, [open]);

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

  return (
    <div id='navArea' className={open ? 'open' : ''}>
      <nav onClick={closeOnBackground}>
        <ul className="nav-list">
          {links.map((link, i) => {
            const content = (
              <>
                <span className="nav-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="nav-label" ref={(el) => { labels.current[i] = el }}>{link.label}</span>
              </>
            );
            return (
              <li key={link.label} style={{ '--i': i }}>
                {link.href
                  ? <a href={link.href} aria-label={link.label}>{content}</a>
                  : <NavLink to={link.to} end onClick={() => setOpen(false)} aria-label={link.label}>{content}</NavLink>}
              </li>
            );
          })}
        </ul>
      </nav>

      <button
        type="button"
        className="toggle-btn"
        onClick={() => setOpen(!open)}
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
