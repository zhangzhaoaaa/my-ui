/**
 *
 Created by zhangzhao on 2017/9/5.
 Email: zhangzhao@gomeplus.com
 */
/* css */
import 'css/components/dialog.scss';

import React, {Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {btns, onClose, onOk} = this.props;
        if (btns) {
            if (btns === 1) {
                return <div className="ui-dialog-footer"><button className="footer-btn" onClick={onOk}>我就是按钮</button></div>
            } else if (btns === 2) {
                return <div className="ui-dialog-footer">
                    <div>
                        <button className="footer-btn" onClick={onOk}>确定</button>
                        <button className="footer-btn right-btn" onClick={onClose}>取消</button>
                    </div>
                </div>
            }
        } else {
            return (<div className="ui-dialog-footer">{
                this.props.children
            }</div>);
        }
    }
}

class Body extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div className="ui-dialog-content">{
            this.props.children
        }</div>);
    }
}
class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible,
            bodyOverflow: ''
        }
    }

    componentDidMount(){

    }
    componentWillUnmount() {
        if (document.body && document.body.style) {
            document.body.style.removeProperty('overflow');
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            visible: nextProps.visible
        })
        if (this.willOpen(this.props, nextProps)){
            if (document.body && document.body.style) {
                if (!this.state.bodyOverflow) {
                    this.setState({
                        bodyOverflow: document.body.style.overflow
                    });
                }
                document.body.style.overflow = 'hidden';
            }
        }

        if (this.willClose(this.props, nextProps)) {
            if (this.state.bodyOverflow !== 'hidden' && document.body && document.body.style) {
                document.body.style.overflow = this.state.bodyOverflow;
            }
        }
    }
    willOpen(prevProps, nextProps) {
        return (!prevProps.visible && nextProps.visible);
    }

    willClose(prevProps, nextProps) {
        return (prevProps.visible && !nextProps.visible);
    }
    onClose=()=> {
        this.props.onClose();
    }
    getDialogElement() {
        let {headerStyle, title} = this.props;

        let headerDiv,
            dialogDiv;
        if (title) {
            headerDiv = <div className="ui-dialog-header" style={headerStyle} ref="header">
                <span className="ui-dialog-title">{title}</span>
                <span className="ui-dialog-close" onClick={this.onClose}></span>
                </div>;
        }
        dialogDiv = <div className="my-ui-dialog">
            <div className="ui-dialog-wrap">
                <div className="ui-dialog-body">
                    {headerDiv}
                    {this.props.children}
                </div>
            </div>
        </div>
        return (dialogDiv)
    }
    getMask() {
        if (this.state.visible) {
            return <div className="ui-mask"></div>
        }
    }
    render () {
        if (this.state.visible) {
            return (
                <div>
                    {this.getMask()}
                    {this.getDialogElement()}
                </div>
            );
        } else {
            return null;
        }
    }
}

Dialog.Body = Body;
Dialog.Footer = Footer;
export default Dialog;