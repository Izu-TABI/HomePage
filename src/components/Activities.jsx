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
                                <span className="date">2022.3</span>
                            </p>
                        </div>
                        <p className="tit">
                            中国地区高専コンピュータフェスティバル - ゲーム部門
                        </p>
                        <div className="block-txt"></div>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Activities