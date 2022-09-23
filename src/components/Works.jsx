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
                        Discordのbotで天気予報をAPIを用いて送るbot
                    </p>
                </div>
                <div className="work-block">
                    <a href="https://github.com/Izu-TABI/classic_games">CLASSIC GAMES</a>
                    <p>JavaScript HTML CSS jQuery 98.css<br/>
                        CSSのライブラリである98.cssを用いてwindows98の雰囲気を再現。有名ゲームを3つ収録。
                        中国地区高専コンピュータフェスティバル(2022)の展示作品。
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works