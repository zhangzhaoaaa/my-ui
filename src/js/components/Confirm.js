/**
 *
 Created by zhangzhao on 2017/9/11.
 Email: zhangzhao@gomeplus.com
 */
import 'css/components/confirm.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Confirm extends Component {
    constructor(props) {
        super(props);
        this.state={
            title: '',
            msg: '',
            style: {
                display: 'none'
            },
            onOk: props.onOk || function () {},
            onCancel: props.onCancel || function () {}
        }
    }
    show(confirmProps) {
        this.setState({
            style: {
                display: 'block'
            },
            title: confirmProps.title || '',
            msg: confirmProps.msg || '',
            onOk: confirmProps.onOk || this.props.onOk,
            onCancel: confirmProps.onCancel || this.props.onCancel
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
            <div className="my-ui-confirm-wrap" style={this.state.style}>
                <div className="ui-confirm-mask"></div>
                <div className="my-ui-confirm">
                    <div>
                        <div className="confirm-header">456</div>
                        <span className="ui-dialog-close" onClick={this.onClose}></span></div>
                    <div className="confirm-wrap">
                        <div className="confirm-body">
                            {this.state.msg}
                        </div>
                    </div>

                    <div className="confirm-footer">
                        <button className="footer-btn" onClick={()=>{this.state.onOk(this.onClose)}}>确定</button>
                        <button className="footer-btn right-btn" onClick={()=>{this.state.onCancel(this.onClose)}}>取消</button>
                    </div>
                </div>
            </div>

        );
    }
}

Confirm.newInstance = function newConfirmInstance(properties) {
    const { getContainer, ...props } = properties || {};
    let div;
    if (getContainer) {
        div = getContainer();
    } else {
        div = document.createElement('div');
        document.body.appendChild(div);
    }
    const confirm = ReactDOM.render(<Confirm {...props} />, div);
    return {
        show(alertProps) {
            confirm.show(alertProps);
        },
        hide() {
            confirm.onClose();
        },
        component: confirm,
        destroy() {
            ReactDOM.unmountComponentAtNode(div);
            if (!getContainer) {
                document.body.removeChild(div);
            }
        },
    };
};

export default Confirm;