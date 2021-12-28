// 이 파일에서만 no-global-assign ESLisnt 옵션을 비활성화합니다.
/* eslint-diable no-gloabl-assign */

require = require('esm')(module /*, options */);
module.exports = require('./main.js');
