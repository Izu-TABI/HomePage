import React from 'react'
import Hamburger from './Hamburger'

function Works() {
  return (
    <div>
        <div className="works-main">
            <Hamburger />
            <h2 className="works-title">
                    Works
            </h2>

            <div className="works-contents">
                <div className="work-block">
                    <a href="https://github.com/Izu-TABI/discord_bot_Log">Log</a>
                    <p>Node.js<br/>
                        Discordのbotでボイスチャンネルの入退出を記録するのが主な機能。<br/>
                        他にもボイスチャンネルに誰も参加してない場合メンションする機能などがある。
                    </p>
                </div>
                <div className="work-block">
                    <a href="https://github.com/Izu-TABI/discord_bot_weather">weather</a>
                    <p>Node.js<br/>
                        Discordのbotで天気予報をAPIで取得して送信するbot
                    </p>
                </div>
                <div className="work-block">
                    <a href="https://github.com/Izu-TABI/classic_games">CLASSIC GAMES</a>
                    <p>JavaScript HTML CSS jQuery 98.css<br/>
                        CSSのライブラリである98.cssを用いてwindows98の雰囲気を再現。有名ゲームを3つ収録。
                        中国地区高専コンピュータフェスティバル(2022)の時の作品。
                    </p>
                </div>
                <div className="work-block">
                    <a href="https://github.com/Izu-TABI/bookwalker_scraping">web scraping</a>
                    <p>Python<br/>
                        <a href="https://bookwalker.jp/top/?adpcnt=ROxepnj9&utm_source=google&utm_medium=cpc&utm_term=b_bookwalker&utm_campaign=&utm_content=__cp_15587790200_gr_131970067195_kw_aud-1665289761998:kwd-4401790829_cr_569972028628&gclid=Cj0KCQjwsrWZBhC4ARIsAGGUJupgq35i8v1TAFZMw6pr7d1tlx2sl2IxLKWTGwjcb1Fyiat6nn13dOkaAjq4EALw_wcB">BOOKWALKER</a>
                        の期間限定価格の商品をスクレイピングで取得し、csvファイルに書き出す。
                    </p>
                </div>
                <div className="work-block">
                    <a href="https://github.com/Izu-TABI/speak_clock">speak clock</a>
                    <p>JavaScript<br/>
                        時刻を取得して読み上げるというもの。ネタです。<br/>
                        <a href="https://izu-tabi.github.io/speak_clock/">公開リンク</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works