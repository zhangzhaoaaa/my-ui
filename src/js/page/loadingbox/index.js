/* css */
import 'css/page/loadingbox/index.scss';

import React, {Component} from 'react';
import LoadingBox from './loadingbox';

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