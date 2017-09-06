/* 新建 page */

const fs = require('fs');
const path = require('path');

const fsExtra = require('fs-extra');
const rd = require('rd');
const inquirer = require('inquirer');
const chalk = require('chalk');

const logger = require('./logger.js');
const paths = require('../paths');
const buildEnv = require('../buildEnv.json');
const jsPageTargetDir = paths.page;
const cssPageTargetDir = path.join(__dirname, '../../src/css/page/');

inquirer
	.prompt([{
		type: 'input',
		message: 'Please input new module name',
		name: 'moduleName'
	}])
	.then(answers => {
		if (!answers.moduleName) {
			logger.fatal('Module name is must!');
			return process.exit(0);
		}
		let dirs = rd.readDirSync(jsPageTargetDir);
		if (isExitsModule(answers.moduleName, dirs, jsPageTargetDir)) {
			logger.fatal('Module name is existential!');
			return process.exit(0);
		}
		let target = answers.moduleName;
		const jsTpl = 
`/* css */
import 'css/page/${target}/index.scss';

`;
		const cssTpl = 
`/* ${target} */
@import "../../base/public.scss";
`;
		const jsTarget = path.join(jsPageTargetDir, target, `index.js`);
		const cssTarget = path.join(cssPageTargetDir, target, `index.scss`);
		fsExtra.ensureFileSync(jsTarget);
		fsExtra.ensureFileSync(cssTarget);
		fs.writeFileSync(jsTarget, jsTpl);
		fs.writeFileSync(cssTarget, cssTpl);

		logger.success(`${chalk.green.bold(jsTarget)} is created`);
		logger.success(`${chalk.green.bold(cssTarget)} is created`);
		logger.success(`Create ${chalk.green.bold(target)} module succeed.`);
	});

function isExitsModule(target, list, prefix) {
	let cur = [];
	return list.indexOf(path.join(prefix, target)) !== -1;
}
