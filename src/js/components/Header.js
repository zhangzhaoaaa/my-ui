/**
 * [头部]
 * @return {[type]} [description]
 */
import React from 'react';

class Header extends React.Component{

	constructor(props){
		super(props);
	}

	logout = ()=>{
	}

	render() {
		return (
			<div className="head">
				<div className="logo">
				</div>
				<div className="fr">
					<span>{'张三'}</span>
					<span className="line">|</span>
					<a href="javascript:;" onClick={this.logout}>退出</a>
				</div>
			</div>
		)
	}
}

export default Header;
