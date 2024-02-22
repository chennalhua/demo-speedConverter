import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Loading from '../components/Loading';

const Login = () => { //登入
    //@ VALUE
    let [isLoading, setIsLoading] = useState(false); //true:開 ; false:關
    let [loginData, setLoginData] = useState({ account: '', password: '' }) //account:帳號 ; password:密碼

    useEffect(() => {
        let API = 'https://randomuser.me/api/'
        axios.get(API)
            .then((res) => {
                console.log(res.data.info.version)
            })
    }, [])

    //@ EVENT
    const handleEvent = {
        signUp: function () {
            let API = `https://hex-escape-room.herokuapp.com/api/user/signup`
            //防呆設計。判斷要傳進去的值有沒有為空
            if (loginData.account == '' || loginData.password == '') {
                alert('帳號或密碼不能為空')
                return //不往下執行
            }
            //建立要傳輸的格式
            let postData = {
                email: loginData.account,
                password: loginData.password
            }
            setIsLoading(true)//Loading 設定狀態打開
            axios.post(API, postData)
                .then((res) => {
                    if (res.data.success) { //success 為 true
                        console.log(res.data)
                        // alert('註冊成功~請進行登入')
                        // window.location.href = '/' //跳轉登入頁
                    } else { //success 為 false，錯誤訊息
                        setIsLoading(false) // 將loading 狀態轉回 false
                        alert(res.data.message) //跳出訊息警告
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }


    return (
        <>
            <Loading isLoading={isLoading} />
            <div className="container">
                <h2 className='text-center mt-3 fw-bolder text-primary'>註冊</h2>
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-6 mx-auto my-5">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="account" className="form-label">帳號</label>
                                <input type="email" className="form-control" id="account" onChange={e => setLoginData({ ...loginData, account: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">密碼</label>
                                <input type="password" className="form-control" id="password" onChange={e => setLoginData({ ...loginData, password: e.target.value })} />
                            </div>
                            <div className='text-center'>
                                <button type="button" className="btn btn-primary text-light fw-bolder" onClick={e => handleEvent.signUp()}>註冊</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login