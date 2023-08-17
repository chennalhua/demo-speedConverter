import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../view/HomePage';
const AppRouter = () => { //使用 react-router-dom v5 版本
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/'><HomePage /></Route>
                </Switch>
            </Router>
        </>
    )
}
export default AppRouter