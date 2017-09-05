import React, {Component} from 'react';
import {
    Route,
    Prompt,
    Redirect,
    Switch
} from 'react-router-dom';

import {store, history} from 'store';
import 'css/components/dialog.scss';
import Nav from 'components/Nav';
import Header from 'components/Header';
import {indexRoutes} from '../../router/navigation.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }

    render() {
        return  (
            <div className="main">
                <Header {...this.props} />
                <Nav />
                <div className="content">
                    {
                        indexRoutes.map((route, i) => (
                            <Route key={route.path} {...route} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default App;