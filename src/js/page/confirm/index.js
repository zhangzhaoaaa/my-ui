/* css */
import React, {Component} from 'react';
import Confirm from 'components/Confirm';

let confirm  = Confirm.newInstance({

});

class ConfirmApp extends Component {
    constructor(props) {
        super(props);
    }
    open=()=> {
        confirm.show({
            msg: '1234',
            onOk(close) {
                close();
                alert('ok');
            },
            onCancel(close) {
                close();
                alert('cancel');
            }
        })
    }
    render() {
        return (
            <div>
                <button className="btn" onClick={this.open}>confirm</button>
            </div>
        );
    }
}


export default ConfirmApp;