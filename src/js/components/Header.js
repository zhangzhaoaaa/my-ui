/**
 * [头部]
 * @return {[type]} [description]
 */
import React, {PropTypes} from 'react';
// import routes from '../router/navigation.jsx';
import fetch from 'io/fetch';
import Notification from 'components/Notification';

class Header extends React.Component{

	constructor(props){
		super(props);
	}

	logout = ()=>{
		let notification = Notification({});
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
