import React, { useEffect, useState } from 'react'
import Hamburger from './Hamburger'
import Log from '../works_images/LOG_logo.png';
import Weather from '../works_images/weather.png';
import Classicgames from '../works_images/classicgames.png';
import Scraping from '../works_images/webscraping.png';
import SpeakClock from '../works_images/speakclock.png';
import Focus from '../works_images/focus_icon.png'
import Connect2 from '../works_images/connect.png'
import Loading from './Loading';
import Honeycomb from '../works_images/honeycomb_logo.png';
import BallClock from '../works_images/ballclock.png';

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
        <div>
            <div className="works-main" >
                <Hamburger />
                <h2 className="works-title">
                    Works
                </h2>

                <div className="works-contents">
                    <div className="work-block">

                        <img className="works-logo" src={Honeycomb} alt="logo" />
                        <a className="work-title" href="https://honeycombquest.web.app/">Honeycomb Quest</a>

                        <div className="text-area">
                            <small>言語など: HTML SCSS React Firebase</small>
                            <p>
                                ハニカム英文法を用いた英語学習ゲーム<br />

                            </p>
                        </div>

                    </div>
                    <div className="work-block">

                        <img className="works-logo" src={Focus} alt="logo" />
                        <a className="work-title" href="https://github.com/Izu-TABI/Focus">Focus</a>

                        <div className="text-area">
                            <small>言語など: HTML SCSS React Node.js Firebase Python</small>
                            <p>
                                勉強時間を記録します。<br />
                                Discordと連携し、効率的な学習環境を整えます。
                            </p>
                            <a href="https://izu-focus.web.app/">🔗Link</a>
                        </div>

                    </div>
                    <div className="work-block">

                        <img className="works-logo" src={BallClock} alt="logo" />
                        <a className="work-title" href="https://github.com/Izu-TABI/BallClock">Ball Clock</a>

                        <div className="text-area">
                            <small>言語など: JavaScript HTML/CSS Three.js</small>
                            <p>
                                時計アプリ<br />
                                マウスをうごかすとボールも動く。
                            </p>
                            <a href="https://izu-tabi.github.io/BallClock/">🔗Link</a>
                        </div>

                    </div>
                    <div className="work-block">

                        <img className="works-logo" src={Connect2} alt="logo" />
                        <a className="work-title" href="https://github.com/Izu-TABI/Connect2">Connect2</a>

                        <div className="text-area">
                            <small>言語など: Node.js</small>
                            <p>
                                Discordのbotでボイスチャンネルの入退出を音声で知らせます。<br />
                                Log2の改良。
                            </p>
                        </div>

                    </div>


                    <div className="work-block">

                        <img className="works-logo" src={Log} alt="logo" />
                        <a className="work-title" href="https://github.com/Izu-TABI/discord_bot_Log">Log</a>

                        <div className="text-area">
                            <small>言語など: Node.js</small>
                            <p>
                                Discordのbotでボイスチャンネルの入退出を記録するのが主な機能。<br />
                                他にもボイスチャンネルに誰も参加してない場合メンションする機能などがあります。
                            </p>
                        </div>

                    </div>

                    <div className="work-block">
                        <img className="works-logo" src={Weather} alt="logo" />
                        <a className="work-title" href="https://github.com/Izu-TABI/discord_bot_weather">weather</a>

                        <div className="text-area">
                            <small>言語など: Node.js</small>
                            <p>
                                Discordのbotで天気予報をAPIで取得して送信するbot
                            </p>
                        </div>
                    </div>

                    <div className="work-block">
                        <img className="works-logo" src={Classicgames} alt="logo" />
                        <div className="text-area">
                            <a className="work-title" href="https://github.com/Izu-TABI/classic_games">CLASSIC GAMES</a>
                            <small>言語など: JavaScript HTML CSS jQuery 98.css</small>
                            <p>
                                CSSのライブラリである98.cssを用いてwindows98の雰囲気を再現。有名ゲームを3つ収録。
                                中国地区高専コンピュータフェスティバル(2022)の時の作品。
                            </p>
                        </div>
                    </div>
                    <div className="work-block">
                        <img className="works-logo" src={Scraping} alt="logo" />
                        <div className="text-area">
                            <a className="work-title" href="https://github.com/Izu-TABI/bookwalker_scraping">web scraping</a>
                            <small>言語など: Python</small>
                            <p>
                                BOOKWALKERの期間限定価格の商品をスクレイピングで取得し、csvファイルに書き出します。
                            </p>
                        </div>
                    </div>
                    <div className="work-block" style={{ marginBottom: '50px' }}>
                        <img className="works-logo" src={SpeakClock} alt="logo" />
                        <div className="text-area">
                            <a className="work-title" href="https://github.com/Izu-TABI/speak_clock">speak clock</a>
                            <small>言語など: JavaScript</small>
                            <p>
                                時刻を取得して読み上げるというもの。ネタです。<br />
                                <a href="https://izu-tabi.github.io/speak_clock/">🔗Link</a>
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Works
