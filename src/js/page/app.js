import 'css/components/back2top.scss';
import 'css/page/wrap/index.scss';
import React, {Component} from 'react';
import HomePage from 'page/index/index';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';

import {store, history} from 'store';
import {loginRoutes} from 'router/navigation';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    privateRoute = () => (
        <Route exact render={props => (
            <HomePage {...props}/>
        )} />
    )
    render() {
        return (
            <div>
                <Router history={history}>
                        <Switch>
                            {this.privateRoute()}
                        </Switch>
                </Router>
            </div>
        );
    }
}

