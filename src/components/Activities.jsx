import React from 'react'
import Hamburger from './Hamburger'
import '../Activities.css'

// award: タイトルの横に強調表示される受賞・表彰
// desc : タイトルの下に出る一言説明
const sections = [
    {
        heading: '経歴',
        items: [
            { date: '2026.4', title: '広島大学 情報科学部 情報科学科 知能科学プログラム 3年次編入学' },
            { date: '2026.3', title: '津山工業高等専門学校 総合理工学科 情報システム系 卒業' },
        ],
    },

    {
        heading: '論文',
        items: [
            {
                date: '2024',
                title: '全系横断演習Ⅰ・Ⅱにおける英語学習Webゲームおよびカードゲームの開発とその効果検証',
                link: 'https://www.tsuyama-ct.ac.jp/images/kyousyokuin/kiyou/kenkyuuhoukoku2024k02.pdf',
                desc: '津山工業高等専門学校紀要（共著）。英語学習ゲーム「Honeycomb Quest」を3名でチーム開発し、高専生140名・中学校教員8名へのアンケートで効果を検証。その後、実際に中学校の英語の授業で使用された。',
            },
        ],
    },

    {
        heading: '経験',
        items: [
            {
                date: '2026.9',
                title: 'Micron インターンシップ（広島大学 プロジェクト研究）',
                desc: '1週間のインターンシップに参加',
            },
            {
                date: '2025.3',
                title: '中国地区高専コンピュータフェスティバル - 主管校 総責任者',
                desc: 'システム研究部 部長として、部員や教職員と共同し、大会を企画・運営',
            },
        ],
    },
    {
        heading: '受賞・大会',
        items: [
            { date: '2026.3', title: '津山工業高等専門学校 卒業表彰 優秀賞' },
            { date: '2024.3', title: '中国地区高専コンピュータフェスティバル - アプリケーション部門 3位' },
            { date: '2023.6', title: '第34回全国高等専門学校 プログラミングコンテスト - 自由部門' },
            { date: '2023.3', title: '中国地区高専コンピュータフェスティバル - アプリケーション部門' },
            { date: '2022.9', title: '第22回日本情報オリンピック 敢闘賞'},
            { date: '2022.9', title: 'パソコン甲子園2022 - プログラミング部門' },
            { date: '2022.3', title: '中国地区高専コンピュータフェスティバル - ゲーム部門' },
            
        ],
    },
]

function Activities() {
    return (
        <>
            <div className="main">
                <Hamburger />
                <h2 className="title">
                    Career
                </h2>

                <div className="contents">
                    <div className="block">
                        {sections.map((section, i) => (
                            <section
                                key={section.heading}
                                className={i === sections.length - 1 ? 'career-section final-contents' : 'career-section'}
                            >
                                <h3 className="section-heading">{section.heading}</h3>

                                {section.items.map((item) => (
                                    <div className="block-txt" key={item.date + item.title}>
                                        <div className="block-date">
                                            <p>
                                                <span className="date">{item.date}</span>
                                            </p>
                                        </div>
                                        <p className="tit">
                                            {item.link
                                                ? <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
                                                : item.title}
                                            {item.award && <span className="award">{item.award}</span>}
                                        </p>
                                        {item.desc && <p className="desc">{item.desc}</p>}
                                    </div>
                                ))}
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Activities
