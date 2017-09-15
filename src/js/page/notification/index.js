/* css */
import React, {Component} from 'react';
import Notification from 'components/Notification';

let notice = Notification.newInstance({});
class NotificationApp extends Component {
    constructor(props) {
        super(props);
    }
    open=()=> {
        notice.notice({
            content: '看看就好'
        })
    }
    render() {
        return (
            <div>
                <button className="btn" onClick={this.open}>notification</button>
            </div>
        );
    }
}


export default NotificationApp;