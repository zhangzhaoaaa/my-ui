/* css */
import React, {Component} from 'react';
import {Alert} from 'components/index';

let alert  = Alert.newInstance({});

class AlertApp extends Component {
    constructor(props) {
        super(props);
    }
    open=()=> {
        alert.notice({
            content: '1234'
        })
    }
    render() {
        return (
            <div>
                <button className="btn" onClick={this.open}>alert</button>
            </div>
        );
    }
}


export default AlertApp;