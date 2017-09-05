/**
 *
 Created by zhangzhao on 2017/7/24.
 Email: zhangzhao@gomeplus.com


 用法：
     参数：
     1. visible: true/false，true是显示弹出框，false是隐藏弹出框
     2. title：弹出框信息，单条确认信息，只用传title即可
     3. msg: 弹出框说明，两条说明信息，将msg传进来进行说明
     4. onOk:  确定按钮
     5. onCancel: 取消按钮
     6. onClose:  右上角关闭按钮
 */
import React, {Component} from 'react';
import Dialog from 'fv-dialog';

import 'css/components/dialog.scss';

class Confirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style : {
                width: 250
            },
            visible: this.props.visible
        }
    }

    onOk = () => {
        this.setState({
            visible: false
        }, function(){
            this.props.onOk(this.onClose);
        });
    }

    onClose = () => {
        this.setState({
            visible: false
        }, function(){
            this.props.onClose();
        });
    }

    onCancel = () => {
        this.setState({
            visible: false
        }, function(){
            this.props.onCancel();
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            visible: nextProps.visible
        });
    }

    render() {
        let {title, msg, okValue = '确定', cancelValue = '取消'} = this.props;
        if (!this.state.visible) {
            return null;
        } else {
            return(
                <Dialog
                    visible={this.state.visible}
                    onClose={this.onClose}
                    style={this.state.style}
                    closeStyle="icon-19"
                    footer={
                        <div className="footer-wrap">
                            <div className="footer-button"><a key={'确定'} onClick={this.onOk}>{okValue}</a></div>
                            <div className="footer-button"><a key={'取消'} onClick={this.onCancel}>{cancelValue}</a></div>
                        </div>
                    }
                >
                    <p className="alert-body">{title}</p>
                    {msg ? (<p className="alert-msg">{msg}</p>) : <div></div>}
                </Dialog>
            );
        }
    }
}

const noop = function(){};

Confirm.defaultProps = {
    onCancel: noop, // 取消按钮
    onOk: noop,  // 确定按钮
    onClose: noop // 右上角关闭按钮
};

export default Confirm;
