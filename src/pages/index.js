/*
* @Author: penghongjie
* @Date:   2017-01-13 15:31:56
*/

'use strict';

import HOME form './home'
import ABOUT form './about'

import { Router, Route, IndexRoute, broserHistory, applyRouterMiddleware, Redirect, render } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'


const routes = (history) => {
    <Router history={history}>
        <Route path="/" component={HOME} />

        <Route path="about" component={ABOUT} />

    </Router>
}

render(routes(broserHistory), document.getElementById('app'))