import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Store from "./store/store"
import { createBrowserHistory } from 'history';

import { Route, Switch } from 'react-router-dom'
import Manager from "./components/manager/Manager"
import UserLogin from "./components/user/UserLogin"
import ScheduleLayout from "./layouts/ManagerLayout"


ReactDOM.render(
    <Provider store={Store}>
        <Router history={createBrowserHistory()} >
            <Switch>
                <Route
                    component={(match) => <ScheduleLayout {...this.props} type="salas" match={match} />}
                    path="/salas/:search"
                />
                <Route
                    component={(match) => <ScheduleLayout {...this.props} type="turmas" match={match}  />}
                    path="/turmas/:search"
                />
                <Route
                    component={() => <ScheduleLayout type="salas"  />}
                    path="/salas/"
                />
                <Route
                    component={() => <ScheduleLayout type="turmas" />}
                    path="/turmas/"
                />
                <Route component={Manager} exact path="/manager" ></Route>
                <Route component={UserLogin} exact path="/login" ></Route>
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
