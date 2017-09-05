/**
 *
 Created by zhangzhao on 2017/7/18.
 Email: zhangzhao@gomeplus.com
 */
import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import {createLogger} from 'redux-logger'
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
const history = createHistory();

const middleware = routerMiddleware(history);
// const loggerMiddleware = createLogger()


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        router: routerReducer
    }),
    composeEnhancers(
        applyMiddleware(
            thunk,
            middleware,
            // loggerMiddleware
        )
    )
);

export {history, store};