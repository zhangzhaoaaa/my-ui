/* css */
import 'css/components/back2top.scss';
import React, {Component} from 'react';
import * as tools from 'util/tools';

export default class Back2Top extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let container = this.props.container;
        if (container === undefined) {
            this.wrap = window;
        } else {
            if (tools.isEmpty(container)) {
                throw new Error("please correct container is a className or id");
            } else if (tools.isString(container)) {
                this.wrap = document.querySelector(container);
            }
        }
        this.wrap.addEventListener('scroll', (e)=>{
            if (this.getScrollTop() > this.getHalfHeight() ) {
                document.querySelector('.back2top').style.display = 'block';
            } else {
                document.querySelector('.back2top').style.display = 'none';
            }
        })
    }
    getHalfHeight() {
        if (this.wrap === window) {
            return this.wrap.screen.height / 2;
        } else {
            return this.wrap.clientHeight / 2;
        }
    }
    getScrollTop() {
        if (this.wrap === window) {
            return this.wrap.pageYOffsetY;
        } else {
            return this.wrap.scrollTop;
        }
    }
    scrollTo(top) {
        if (this.wrap === window) {
            window.scroll(0, Math.floor(top));
        } else {
            this.wrap['scrollTop'] = Math.floor(top);
        }
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
    easeInQuad(t, b, _c, d) {
        var c = _c - b;
        return c * (t /= d) * t + b;
    }
    scrollStep=()=> {
        if (this.getScrollTop() === 0) {
            clearInterval(window.intervalId);
        }
        var ease = this.easeInQuad(1, this.getScrollTop(), 0, 5);
        this.scrollTo(Math.floor(ease));
    }
    scrollToTop=()=> {
        var deb = this._debounce(this.scrollStep, 0);
        window.intervalId = setInterval(deb, 5);
    }
    render() {
        return (
            <div><button className="back2top " onClick={this.scrollToTop}></button></div>
        )
    }
}