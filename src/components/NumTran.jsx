import React, { useState } from 'react';
//*-- 速度轉換 component --*//
const NumTran = ({ inputNum, setInputNum, handleStyleTheme }) => { // { inputNum, setInputNum, handleStyleTheme } 父層傳進來接收
    //設定預設值(可為空值或其他...等等狀態，依據取得資料型態去設計)
    let [alertText, setAlertText] = useState('請輸入數值')

    //@ EVENT 事件設計
    const handleEvent = {
        changeNumber: function (e) { //變更數字
            let value = e.target.value
            setInputNum(value);
            if (value < 0) {
                setInputNum(0);
                setAlertText('最小為 0 ,請重新輸入')
            } else if (value > 100) {
                setInputNum(100);
                setAlertText('最大為 100 ,請重新輸入')
            }
        }
    }

    return (
        <div className="row text-center mt-2 align-items-baseline flex-column flex-lg-row">
            <div className="col-12 col-lg-5 mb-2">
                <h3 className="fs-5 mb-3">Mbps</h3>
                <div>
                    <label htmlFor="set" className="text-secondary fw-bolder mb-3">SET</label>
                    <input type="number" id="set" className="form-control" min="0" max="100"
                        onChange={e => handleEvent.changeNumber(e)} value={inputNum} />
                    <p className="mb-0 mt-1 text-danger alert-text">{alertText}</p>
                </div>
            </div>
            <div className="col-12 col-lg-2 mb-2">
                <div className="tranIcon"><i className="bi bi-arrow-left-right"></i></div>
                <i className="bi bi-arrow-right-short d-none d-lg-block"></i>
            </div>
            <div className="col-12 col-lg-5 my-2">
                <h3 className="fs-5 mb-3">Mb/s</h3>
                <div>
                    <p className="text-secondary fw-bolder">SHOW</p>
                    <p className="text-blue fw-bolder" style={handleStyleTheme()}>{(inputNum / 8).toFixed(2)}</p> {/* Mbps換算MB/s要除8 */}
                </div>
            </div>
        </div>
    )
}
export default NumTran