/* css */
import 'css/page/dialog/index.scss';

import React, {Component} from 'react';
import Dialog from './dialog';

class DialogApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    componentDidMount(){

    }
    openDialog=()=>{
        this.setState({
            visible: true
        })
    }
    onClose=()=>{
        this.setState({
            visible: false
        })
    }
    render () {
        return (
            <div>
                <button className="btn" onClick={this.openDialog}>打开Dialog</button>
                <Dialog visible={this.state.visible} title="123" onClose={this.onClose}>
                    <Dialog.Body>
                        <div className="ui-body">
                            <p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>
                            123</p>
                            <p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>123</p><p>
                            123</p>
                        </div>
                    </Dialog.Body>
                    <Dialog.Footer btns={2}
                        onClose={this.onClose}
                        onOk={this.onClose}
                    >
                    </Dialog.Footer>
                </Dialog>
            </div>
        );
    }
}

export default DialogApp;