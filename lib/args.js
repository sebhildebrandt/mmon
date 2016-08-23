'use strict';

// ==================================================================================
// args.js
// ----------------------------------------------------------------------------------
// Description:   tiny CLI args parser
//                for Node.js
// Copyright:     (c) 2016
// Author:        Sebastian Hildebrandt
// ----------------------------------------------------------------------------------
// Contributors:  -
// ----------------------------------------------------------------------------------
// Usage:
// let options = require('path/to/args.js');
// returns an object with all CLI Arguments parsed
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================

function getArgs() {
	function isNumeric(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	}

	let args = process.argv.slice(2);

	let result = {};
	let current = 0;
	args.forEach(function (val, index) {
		if (index == current) {
			current = index + 1;
			if (val.substring(0,2) == '--' && val.length > 2) {
				if (args[index+1] && args[index+1].substring(0,1) != '-' && args[index+1].indexOf('=') == -1) {
					result[val.substring(2,100)] = isNumeric(args[index+1]) ? parseFloat(args[index+1]) : args[index+1];
					current++;
				} else {
					result[val.substring(2,100)] = true;
				}
			} else if (val.substring(0,1) == '-' && val.length > 1) {
				var part = '';
				for (let i = 1; i < val.length; i++) {
					part = val.substring(i,i+1);
					result[part] = true;
				}
				if (args[index+1] && args[index+1].substring(0,1) != '-' && args[index+1].indexOf('=') == -1) {
					result[part] = isNumeric(args[index+1]) ? parseFloat(args[index+1]) : args[index+1];
					current++;
				}
			} else if (val.indexOf('=') >= 1) {
				var parts = val.split('=');
				result[parts[0]] = isNumeric(parts[1]) ? parseFloat(parts[1]) : parts[1]
			} else {
				result[val] = true;
			}
		}
	});
	return result;
}

module.exports = getArgs();

