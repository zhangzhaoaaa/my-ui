/* css */
import 'css/components/notification.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

let seed = 0;
const now = Date.now();

function getUuid() {
    return `notification_${now}_${seed++}`;
}
class Notification extends Component {
    constructor(props) {
        super(props);
        this.state={
            notices: '',
            style: {
                display: 'none'
            }
        }
    }
    add = (notice) => {
        this.setState({
           notices: notice.content,
           style:{
               display: 'block'
           }
        });
        this.timer = setTimeout(()=>{
            this.setState({
                style:{
                    display: 'none'
                }
            }, ()=>{
                clearTimeout(this.timer);
            })
        }, this.props.duration || 2000);
    }
    render() {
        return (
            <div className="my-ui-notification-wrap" style={this.state.style}>
                <div className="ui-notification-mask"></div>
                <div className="my-ui-notification">
                    <div className="notification-body">
                        {this.state.notices}
                    </div>
                </div>
            </div>

        );
    }
}
Notification.newInstance = function newNotificationInstance(properties) {
    const { getContainer, ...props } = properties || {};
    let div;
    if (getContainer) {
        div = getContainer();
    } else {
        div = document.createElement('div');
        document.body.appendChild(div);
    }
    const notification = ReactDOM.render(<Notification {...props} />, div);
    return {
        notice(noticeProps) {
            notification.add(noticeProps);
        },
        component: notification,
        destroy() {
            ReactDOM.unmountComponentAtNode(div);
            if (!getContainer) {
                document.body.removeChild(div);
            }
        },
    };
};

export default Notification;