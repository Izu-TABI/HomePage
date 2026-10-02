import React from 'react';
import '../Career.css';
import PageTitle from './PageTitle';

// 連絡先。Career と同じ「ラベル＋内容」の一覧で表示する（スタイルは Career.css）
const accounts = [
  { label: 'Email', text: 'masakisama14@gmail.com', url: 'mailto:masakisama14@gmail.com' },
  { label: 'Discord', text: '@tabibito14', url: 'https://discord.com/users/807536333266354186' },
]

const Contact = () => {
  return (
    <div className="main">
      <PageTitle>Contact</PageTitle>

      <div className="contents">
        <div className="block">
          {accounts.map((account) => (
            <div className="block-txt" key={account.label}>
              <div className="block-date">
                <p>{account.label}</p>
              </div>
              <p className="tit">
                <a href={account.url}>{account.text}</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
