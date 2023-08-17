import React, { useState } from 'react';
const StateCard = ({ inputNum }) => {
    //狀態卡判斷，並根據數值去改變顏色
    let state;
    if (inputNum <= 0) {
        state = {
            title: '---',
            backgroundColor: '#676767'
        }
    } else if (inputNum > 0 && inputNum <= 15) {
        state = {
            title: 'SLOW',
            backgroundColor: '#dc3545'
        }
    } else if (inputNum > 15 && inputNum <= 40) {
        state = {
            title: 'GOOD',
            backgroundColor: '#ffc107'
        }
    } else if (inputNum > 40 && inputNum <= 60) {
        state = {
            title: 'FAST',
            backgroundColor: '#05b22a'
        }
    } else if (inputNum > 60) {
        state = {
            title: 'SUPER FAST',
            backgroundColor: '#b10ae9'
        }
    }

    return (
        <p className="showState text-center py-2 text-light mb-0"
            style={{ backgroundColor: state.backgroundColor }}>{state.title}</p>
    )
}
export default StateCard