/**
 *
 Created by zhangzhao on 2017/9/7.
 Email: zhangzhao@gomeplus.com
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Alert extends Component {
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
    }
    onClose=()=>{
        this.setState({
            style:{
                display: 'none'
            }
        })
    }
    render() {
        return (
            <div className="my-ui-notification-wrap" style={this.state.style}>
                <div className="ui-notification-mask"></div>
                <div className="my-ui-alert">
                    <div><span className="ui-dialog-close" onClick={this.onClose}></span></div>
                    <div className="alert-body">
                        {this.state.notices}
                    </div>
                    <div className="alert-footer">
                        <button className="footer-btn" onClick={this.onClose}>确定</button>
                    </div>
                </div>
            </div>

        );
    }
}

Alert.newInstance = function newAlertInstance(properties) {
    const { getContainer, ...props } = properties || {};
    let div;
    if (getContainer) {
        div = getContainer();
    } else {
        div = document.createElement('div');
        document.body.appendChild(div);
    }
    const notification = ReactDOM.render(<Alert {...props} />, div);
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

export default Alert;