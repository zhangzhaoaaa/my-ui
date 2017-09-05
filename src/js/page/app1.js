import 'css/page/wrap/index.scss';
import 'css/components/loading-box.scss';

import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {
    Router,
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';

import {store, history} from 'store';
import {loginRoutes} from 'router/navigation';
import HomePage from 'page/index/index';
import {page} from 'util/phpCommon';
import Confirm from 'components/Confirm';
import fetch from 'io/fetch';
var tweenFunctions = require('tween-functions');


let loggedIn = page.account_id > 0;
/** React components for scrolling back to the top of the page **/
class ColoredContainer extends React.Component {
    render () {
        let containerStyle = {
            backgroundColor: this.props.color
        }
        return <div className="container" style={containerStyle}></div>
    }
}

class ScrollButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            intervalId: 0
        };
    }
    _debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const _this = this;
            const args = arguments;

            function later() {
                timeout = null;
                if (!immediate) func.apply(_this, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(_this, args);
        }
    }

    scrollStep=()=> {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, tweenFunctions.linear(1, window.pageYOffset, 0, 6));
    }

    scrollToTop=(e)=> {
        let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    render () {
        return <button className="scroll" onClick={this.scrollToTop}>
            <span>back</span>
        </button>;
    }
}

class ScrollApp extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        window.addEventListener('scroll', (e)=>{
            if (window.pageYOffset > window.screen.height / 2 ) {
                document.querySelector('.long').style.display = 'block';
            } else {
                document.querySelector('.long').style.display = 'none';
            }
        })
    }

    render () {
        return <div className="long">
                <ScrollButton scrollStepInPx="50" delayInMs="3"/>
            </div>
    }
}

class Row extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="pic-item">
                <picture className="pic-body">
                <a href="#" className="img-container">
                    <img data-src={this.props.item.image} src={this.props.item.image} className="img" alt="loading" />
                </a>
                </picture>
                <div className="item-footer">
                <div>时间/地点</div>
                <div>赞</div>
                </div>
            </div>
        )
    }
}

class List extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        [...document.querySelectorAll('.img')].forEach(current=>{
            // console.log(current.getBoundingClientRect());
            current.src = current.getAttribute("data-src");
        });

    }
    render(){
        let {list} = this.props,
            array = [];
        for (var i = 0, len = list.length; i < len; i++) {
            array.push(<Row key={i}  item={list[i]} />);
        }
        return (
            <div>{array}</div>

        )
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        fetch.get('/pic/list').then(ret=>{
            this.setState({
               list: ret.data.data.list
            });
        });
        let clientHeight = window.innerHeight;
        [...document.querySelectorAll('.img')].forEach(current=>{
            console.log(current.getBoundingClientRect());
        });
    }
    render() {
        return (
            <div>
                <header className="header">
                    <div className="header-container">
                    <h2><span>简</span><span>片</span></h2>
                    </div>
                </header>
                <main className="main-wrap">
                    <div className="main-container">
                        <List list={this.state.list} />
                    </div>
                    <ScrollApp/>
                </main>

            </div>
        );
    }
}

