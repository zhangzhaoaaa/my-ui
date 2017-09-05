/**
 * [下拉菜单]
 * @Author: Fu Xiaochun
 * @Email:  fuzhengchun@gomeplus.com
 * 可传onChange方法，返回的是事件和当前的值。
 */
import 'css/components/drop-down.scss';
import React, { Component } from 'react';

class DropDown extends Component{
	constructor(props){
		super(props);
		this.defaults = {
			showOptions: false,
			name: '',
			selectedId: 0,
			options: [
				{
					text: '全部',
					value:'0'
				},
				{
					text: '审核中',
					value:'1'
				},
                {
                    text: '审核成功',
                    value:'2'
                },
				{
					text: '审核失败',
					value:'3'
				}
			]
		};

		this.state = Object.assign(this.props.options || {}, this.defaults);
		this.haddle = () => {
			this.hideOptions();
		}
	}

	componentDidMount() {
		document.body.addEventListener('click', this.haddle);
	}

	componentWillUnmount() {
		document.body.removeEventListener('click', this.haddle);
	}

	selectChange(e){
		let el = e.target;
		if (el.tagName.toLowerCase() == 'li') {
			let selectedId = el.dataset.id;
			this.setState({
				selectedId: selectedId,
				showOptions: false
			},()=>{
				let val = this.state.options[selectedId].value;
				this.props.onChange && this.props.onChange({e,val});
			});
			
		}else{
			this.toggleOptions();
		}
		
		return false;
	}

	hideOptions(){
		this.setState({
			showOptions: false
		});
	}

	toggleOptions(){
		let showOptions = this.state.showOptions;
		this.setState({
			showOptions: !showOptions
		});
	}

	render(){

		let {name, selectedId, options} = this.state;

		let optionsTpl = [];
		options.map((v, k) => {
			optionsTpl.push(<li key={k} data-id={k} data-value={v.value} className={selectedId == k ? 'active' : ''}>{v.text}</li>)
		});

		return (
			<div onClick={this.selectChange.bind(this)} className={this.state.showOptions? "drop-down open" : "drop-down"}>
				<input type="hidden" name={name} value={options[selectedId].value} />
				<dl>
					<dt>{options[selectedId].text}</dt>
					<dd className="arrow-down icon-17"></dd>
					<dd className="arrow-up icon-18"></dd>
				</dl>
				<ul>
					{optionsTpl}
				</ul>
			</div>
		)
	}
}

export default DropDown;