import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import "babel-polyfill";
import {store} from 'store';
import App from 'page/app';

render(
    <Provider store={store}>
        <div>
            <App />
            <div className="loading-box"><span className="icon-20"></span></div>
        </div>
    </Provider>,
    document.getElementById('root')
);

