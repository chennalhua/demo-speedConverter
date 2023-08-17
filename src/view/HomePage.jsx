import React, { useEffect, useState } from 'react';
//@ 元件 components
import NumTran from '../components/NumTran';
import StateCard from '../components/StateCard';
import Loading from '../components/Loading';
/*
筆記
    參數.toFixed(2) 取小數點幾位

    Math.floor(Math.random()*100)
    - Math.floor() 去浮點
    - Math.random() 產生隨機數 0 ~ 1
        Math.random()*30 會產生 1 ~ 30 之數值
        Math.random()*50 會產生 1 ~ 50 之數值
        以此類推
*/
const HomePage = () => {
    //@ VALUE 變數
    let [isLoading, setIsLoading] = useState(true) //載入中。true:開;false:關
    //設定預設值(Math.floor 去除浮點、random 隨機產生數字)
    let [inputNum, setInputNum] = useState(Math.floor(Math.random() * 100));
    //主題切換 true 亮 、false 暗
    let [changeTheme, setChangeTheme] = useState(true)

    useEffect(() => {
        setTimeout(() => { //設定渲染畫面完成後 1.5秒後，變更 isLoading 狀態為關閉
            setIsLoading(false)
        }, 1500)
    }, [])

    //@ EVENT 事件設計
    const handleThemeChange = () => { //切換主題 (亮暗)
        if (!changeTheme) {
            setChangeTheme(true)
        } else {
            setChangeTheme(false)
        }
    }

    //變更主題色。React inline style 寫法。參考文檔：https://www.w3schools.com/react/react_css.asp
    const handleStyleTheme = () => {
        if (!changeTheme) {
            return {
                background: '#fff',
                color: '#0082be'
            }
        } else {
            return {
                background: '#212529',
                color: '#f8f9fa'
            }
        }
    }

    return (
        <>
            <Loading isLoading={isLoading} />
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center px-2">
                    <div className=" col-md-11 col-lg-5 speed-box p-3 mt-4" style={handleStyleTheme()}>
                        <div className="form-check form-switch mb-3">
                            <label className="form-check-label d-line-block position-relative" htmlFor="styeTheme">
                                <input className="form-check-input me-2" type="checkbox" id="styeTheme"
                                    onChange={handleThemeChange}
                                    checked={changeTheme ? '' : 'checked'} />
                                {/* 三元判斷式：判斷式 ? TRUE正確(似 if) : FALSE不正確(似 else)*/}
                                {changeTheme ? '亮色模式' : '暗色模式'}
                            </label>
                        </div>
                        <header className="bg-primary text-light py-2 text-center">
                            <h1 className="fs-5 mb-0">Network Speed Converter</h1>
                        </header>
                        <main className="container py-4">
                            <NumTran
                                inputNum={inputNum} //將 inputNum 變數傳進元件
                                setInputNum={setInputNum} //將數值更新變數傳進元件
                                handleStyleTheme={handleStyleTheme} //共同事件使用，用於 HomPage 跟 <NumTran/>，將此事件帶進 
                            />
                        </main>
                        <footer>
                            <StateCard inputNum={inputNum} />
                        </footer>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage