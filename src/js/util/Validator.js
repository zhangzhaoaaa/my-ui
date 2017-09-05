/**
 * [表单验证]
 * @Author: Fu Xiaochun
 * @Email:  fuzhengchun@gomeplus.com
 *
 * @val 表单的value
 * @type  表单的验证规则
 * @ignoreNull  是否忽略空值，默认为false
 */
function validator(val, type, ignoreNull = false){
	let regs = {
		tel: /^1[345789]\d{9}$/,
		email:/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@[A-Za-z\d]+([-.][A-Za-z\d]+)*\.[A-Za-z\d]{2,5}$/,
		name: /^[^\s\d]{2,30}$/,
		summary: /^.{5,50}$/,
		summary5_50: /^.{5,50}$/,
		summary5_70: /^.{5,70}$/,
		title: /^.{2,30}$/,
		password: /^\S{6,20}$/,
		account: /^[a-zA-Z][\dA-Za-z]{5,19}$/,
		weixin: /^[a-zA-Z\d]{6,19}$/,
		ignore: /.*/
	};

	let value = val.trim();

	if (ignoreNull && value === '') {
		return true;
	}

	return regs[type].test(value);
}

export default validator;