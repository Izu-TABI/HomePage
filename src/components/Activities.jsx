import React from 'react'
import Hamburger from './Hamburger'

function Activities() {
  return (
    <>
        <div className="main">
            <Hamburger />
            <h2 className="title">
                    Activities
            </h2>

            <div className="contents">
                <div className="block">
                    <div className="block-txt">
                        <div className="block-date">
                            <p>
                                <span className="date">2022.3</span>
                            </p>
                        </div>
                        <p className="tit">
                            中国地区高専コンピュータフェスティバル - ゲーム部門
                        </p>
                        <div className="block-txt"></div>
                    </div>

                    <div className="block-txt">
                        <div className="block-date">
                            <p>
                                <span className="date">2022.9</span>
                            </p>
                        </div>
                        <p className="tit">
                            パソコン甲子園2022 - プログラミング部門
                        </p>
                        <div className="block-txt"></div>
                    </div>

                    <div className="block-txt">
                        <div className="block-date">
                            <p>
                                <span className="date">2022.9</span>
                            </p>
                        </div>
                        <p className="tit">
                            第22回日本情報オリンピック
                        </p>
                        <div className="block-txt"></div>
                    </div>
                    <div className="block-txt">
                        <div className="block-date">
                            <p>
                                <span className="date">2022.10</span>
                            </p>
                        </div>
                        <p className="tit">
                            技育祭2022【秋】
                        </p>
                        <div className="block-txt"></div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <small style={{color: 'gray', fontSize: '5px', position: 'absolute', bottom: '0', marginBottom: '4px'}}>Copyright © 2023 Izu-TABI All rights reserved.</small>
                </div>
            </div>
        </div>
    </>
  )
}

export default Activities