import React, { useState } from 'react'

// テーマは <html data-theme="dark|light"> で切り替える
// 初期値（ダーク）と、保存したテーマの読み込みは public/index.html で行っている
function ThemeToggle() {
  const [theme, setTheme] = useState(
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
  );

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      // 保存できない環境（プライベートブラウズなど）でも、切り替え自体は行う
    }
    setTheme(next);
  }

  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button type="button" className="theme-btn" onClick={toggleTheme} aria-label={label} title={label}>
      {theme === 'dark' ? (
        // 太陽（押すとライトモード）
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
        </svg>
      ) : (
        // 月（押すとダークモード）
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a8 8 0 0 0 10.5 10.5z" />
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle
