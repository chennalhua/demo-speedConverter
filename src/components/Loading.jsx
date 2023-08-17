import React, { useState } from 'react';
const Loading = ({ children, isLoading }) => {
    let inLoadingIconStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
    }
    return (
        <>
            <div className={`loading-wrapper position-fixed ${isLoading === true ? 'd-block' : 'd-none'}`} style={{ zIndex: '9999', top: '0' }}>
                <div className="loading d-flex flex-column align-items-center">
                    <div className={`spinner-border text-secondary spinner-border--width `} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div style={inLoadingIconStyle}>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Loading