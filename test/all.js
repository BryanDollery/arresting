
require('./arresting'); // debug
var nodeunit = require('nodeunit');
var reporter = nodeunit.reporters['default'];
process.chdir(__dirname);
reporter.run(['arresting.js']);
