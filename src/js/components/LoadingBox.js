/**
 *
 Created by zhangzhao on 2017/9/10.
 Email: zhangzhao@gomeplus.com
 */
import 'css/components/loadingbox.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class LoadingBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible,
            text: this.props.text || '拼命加载中'
        }
    }
    show=(props)=>{
        if (props && props.text) {
            this.setState({
                text: props.text,
                visible: true
            })
        } else {
            this.setState({
                visible: true
            })
        }
    }
    hide=()=> {
        this.setState({
            visible: false
        })
    }
    render(){
        let style = {};
        if (this.state.visible) {
            style = {
                display: 'flex'
            }
        } else {
            style = {
                display: 'none'
            }
        }
        return <div className="loading-box" id={this.props.id} style={style}>
            <div className="loading-spin">
                <svg className="circular" viewBox="25 25 50 50">
                    <circle className="path" cx="50" cy="50" r="20" fill="none" />
                </svg>
                <p>{this.state.text}</p>
            </div>

        </div>
    }
}

LoadingBox.newInstance = function newLoadingInstance(properties) {
    const { getContainer, ...props } = properties || {};
    let div;
    if (getContainer) {
        div = getContainer();
    } else {
        div = document.createElement('div');
        document.body.appendChild(div);
    }
    const loadingBox = ReactDOM.render(<LoadingBox {...props} />, div);
    return {
        show(loadingProps) {
            loadingBox.show(loadingProps);
        },
        component: loadingBox,
        destroy() {
            ReactDOM.unmountComponentAtNode(div);
            if (!getContainer) {
                document.body.removeChild(div);
            }
        },
    };
};

export default LoadingBox;