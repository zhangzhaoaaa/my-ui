/* css */
import React, {Component} from 'react';
import LoadingBox from 'components/LoadingBox';

let loading = LoadingBox.newInstance({});
class LoadingBoxApp extends Component {
    constructor(props) {
        super(props);
    }
    open=()=> {
        loading.show();
    }
    render() {
        return (
            <div>
                <button className="btn" onClick={this.open}>alert</button>
            </div>
        );
    }
}


export default LoadingBoxApp;