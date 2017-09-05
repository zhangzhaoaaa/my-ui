import React from 'react';
import { NavLink } from 'react-router-dom';
import {indexRoutes} from '../router/navigation.jsx';

/**
 * [左侧导航]
 * @return {[type]} [description]
 */
class Nav extends React.Component{

	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="menu">
				<ul className="clearfix">
					{
                        indexRoutes.map((nav) => {
                        	var icon = nav.icon || 'icon-1';
                    		return (
								<li key={nav.path}>
									<NavLink to={nav.path} activeClassName="active">
										<em className={icon}></em>
										<span>{nav.navName}</span>
									</NavLink>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}

export default Nav;
