const paths = require('../paths');
const buildEnv = require('../buildEnv.json');

module.exports = function (port) {
    return {
        assetsRoot: paths.dist,
        port: port,
        urls: {
            lcdev: 'http://localhost:' + port
        },
        lcdev: 'http://localhost:' + port,
        publicPath: {
            lcdev: "/"
        }
    }
};
