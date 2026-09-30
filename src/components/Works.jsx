import React, { useEffect, useState } from 'react'
import Hamburger from './Hamburger'
import Loading from './Loading';
import '../Works.css'
import Log from '../works_images/LOG_logo.png';
import Weather from '../works_images/weather.png';
import Classicgames from '../works_images/classicgames.png';
import Scraping from '../works_images/webscraping.png';
import SpeakClock from '../works_images/speakclock.png';
import Focus from '../works_images/focus_icon.png'
import Connect2 from '../works_images/connect.png'
import Honeycomb from '../works_images/honeycomb_logo.png';
import BallClock from '../works_images/ballclock.png';
import RyoWeb from '../works_images/ryo-web.png'

// 作品を足すときは、ここに追加する
// tech : 上の灰色のラベル（Career の日付と同じ位置）
// badge: 名前の横に出る強調ラベル
// links: 下に並ぶリンク（label と url）
const sections = [
    {
        heading: 'Web application & Web site',
        items: [
            {
                name: 'Honeycomb Quest',
                image: Honeycomb,
                tech: 'HTML / SCSS / React / Firebase',
                desc: 'ハニカム英文法を用いた英語学習Webゲーム。3人チームで開発し、ゲームアイデア、プログラミングを担当。高専生140名・中学校教員8名へのアンケートで効果を検証し、実際の中学校の英語授業での使用が決まりました。',
                links: [
                    { label: 'Site', url: 'https://honeycombquest.web.app/' },
                    { label: '論文', url: 'https://www.tsuyama-ct.ac.jp/images/kyousyokuin/kiyou/kenkyuuhoukoku2024k02.pdf' },
                ],
            },
            {
                name: '北辰寮 Webサイト',
                image: RyoWeb,
                tech: 'HTML / SCSS',
                desc: '津山高専の学生寮「北辰寮」のWebサイトを、寮のネットワーク委員長からの依頼で大幅にリニューアル。寮の案内や日課表など寮生向けの情報を掲載し、学校の公式サイト上で公開されています。',
                links: [
                    { label: 'Site', url: 'https://www.tsuyama-ct.ac.jp/ryou/index.html' },
                ],
            },
            {
                name: 'Focus',
                image: Focus,
                tech: 'HTML / SCSS / React / Node.js / Firebase / Python',
                desc: '勉強時間を記録します。Discordと連携し、効率的な学習環境を整えます。',
                links: [
                    { label: 'Site', url: 'https://izu-focus.web.app/' },
                    { label: 'GitHub', url: 'https://github.com/Izu-TABI/Focus' },
                ],
            },
            {
                name: 'Ball Clock',
                image: BallClock,
                tech: 'JavaScript / HTML / CSS / Three.js',
                desc: '時計アプリ。マウスをうごかすとボールも動く。',
                links: [
                    { label: 'Site', url: 'https://izu-tabi.github.io/BallClock/' },
                    { label: 'GitHub', url: 'https://github.com/Izu-TABI/BallClock' },
                ],
            },
            {
                name: 'CLASSIC GAMES',
                image: Classicgames,
                tech: 'JavaScript / HTML / CSS / jQuery / 98.css',
                desc: '3人でのチーム開発を行なった。CSSのライブラリである98.cssを用いてWindows 98の雰囲気を再現。有名ゲームを3つ収録。中国地区高専コンピュータフェスティバル(2022)の時の作品。',
                links: [
                    { label: 'GitHub', url: 'https://github.com/Izu-TABI/classic_games' },
                ],
            },
            {
                name: 'speak clock',
                image: SpeakClock,
                tech: 'JavaScript',
                desc: '時刻を取得して読み上げる。',
                links: [
                    { label: 'Site', url: 'https://izu-tabi.github.io/speak_clock/' },
                    { label: 'GitHub', url: 'https://github.com/Izu-TABI/speak_clock' },
                ],
            },
        ],
    },
    {
        heading: 'Discord Bot',
        items: [
            {
                name: 'Connect2',
                image: Connect2,
                tech: 'Node.js',
                desc: 'Discordのbotでボイスチャンネルの入退出を音声で知らせます。Log2の改良。',
                links: [
                    { label: 'GitHub', url: 'https://github.com/Izu-TABI/Connect2' },
                ],
            },
            {
                name: 'Log',
                image: Log,
                tech: 'Node.js',
                desc: 'Discordのbotでボイスチャンネルの入退出を記録するのが主な機能。他にもボイスチャンネルに誰も参加してない場合メンションする機能などがあります。',
                links: [
                    { label: 'GitHub', url: 'https://github.com/Izu-TABI/discord_bot_Log' },
                ],
            },
            {
                name: 'weather',
                image: Weather,
                tech: 'Node.js',
                desc: 'Discordのbotで天気予報をAPIで取得して送信するbot',
                links: [
                    { label: 'GitHub', url: 'https://github.com/Izu-TABI/discord_bot_weather' },
                ],
            },
        ],
    },
    {
        heading: 'Other',
        items: [
            {
                name: 'web scraping',
                image: Scraping,
                tech: 'Python',
                desc: 'BOOKWALKERの期間限定価格の商品をスクレイピングで取得し、csvファイルに書き出します。',
                links: [
                    { label: 'GitHub', url: 'https://github.com/Izu-TABI/bookwalker_scraping' },
                ],
            },
        ],
    },
]

function Works() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <>
                <Loading />
            </>
        )
    }
    return (
        <div className="main">
            <Hamburger />
            <h2 className="title">
                Works
            </h2>

            <div className="contents">
                <div className="works-list">
                    {sections.map((section) => (
                        <section className="works-section" key={section.heading}>
                            <h3 className="works-heading">{section.heading}</h3>

                            {section.items.map((item) => (
                                <div className="work-item" key={item.name}>
                                    <p className="work-meta">
                                        <span className="work-tech">{item.tech}</span>
                                    </p>

                                    <div className="work-body">
                                        <img className="work-thumb" src={item.image} alt={item.name} />

                                        <div className="work-text">
                                            <p className="work-name">
                                                {item.name}
                                                {item.badge && <span className="work-badge">{item.badge}</span>}
                                            </p>
                                            <p className="work-desc">{item.desc}</p>
                                            <div className="work-links">
                                                {item.links.map((link) => (
                                                    <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                                                        {link.label}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </section>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Works
