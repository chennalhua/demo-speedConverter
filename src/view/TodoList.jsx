import React, { useState } from 'react';
const TodoList = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 mx-auto'>
                        <div className='my-3'>
                            {/* 新增 */}
                            <div className='row mx-auto'>
                                <div className='col-9'>
                                    <input className='form-control' type='text' />
                                </div>
                                <div className='col-3'>
                                    <button className='btn btn-primary text-light fw-bolder w-100'>新增</button>
                                </div>
                            </div>
                            <hr />
                            {/* List */}
                            <div className='border rounded p-2'>
                                <div className='row align-items-center'>
                                    <div className='col-2'>No.1</div>
                                    <div className='col-8'>
                                        <div class='form-check'>
                                            <input class='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
                                            <label class='form-check-label' for='flexCheckDefault'>xxx</label>
                                        </div>
                                    </div>
                                    <div className='col-2'>
                                        <button className='btn btn-danger text-light fw-bolder w-100'>刪除</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TodoList