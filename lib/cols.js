'use strict';

// ==================================================================================
// draw.js
// ----------------------------------------------------------------------------------
// Description:   tiny CLI draw library
//                for Node.js
// Copyright:     (c) 2016
// Author:        Sebastian Hildebrandt
// ----------------------------------------------------------------------------------
// inspired by:   https://github.com/jbnicolai/ansi-256-colors
// Contributors:  -
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================

let fgcodes = Array.apply(null, new Array(256)).map(function (_, i) { return '\x1b[38;5;' + i + 'm'; });
let fg_rgb = fgcodes.slice(16, 232);
let fg_gray = fgcodes.slice(232, 256);

let bgcodes = Array.apply(null, new Array(256)).map(function (_, i) { return '\x1b[48;5;' + i + 'm'; });
let bg_rgb = bgcodes.slice(16, 232);
let bg_gray = bgcodes.slice(232, 256);
let reset_str = '\x1b[0m';

let colors = {
	black: 0,
	red: 1,
	green: 41,
	blue: 26,
	yellow: 222,
	brown: 130,
	gray: 240,
  lightgray: 246,
  darkgray: 234,
	white: 15
};

function f(g) {
	return fgcodes[g];
}
exports.f = f;
exports.fg = function(r, g, b) {
	return fg_rgb[36*r + 6*g + b];
};

exports.fgg = function(g) {
	return fg_gray[g];
};

function b(g) {
	return bgcodes[g];
}
exports.b = b;

exports.bg = function(r, g, b) {
	return bg_rgb[36*r + 6*g + b];
};

exports.bgg = function(g) {
	return bg_gray[g];
};

exports.reset = function() {
	return reset_str
} ;

// defaults
exports.log = function(str, fg, bg) {
	let color = (fg != '' ? fgcodes[(typeof fg === 'string') ? colors[fg] : fg] : '') + (bg ? bgcodes[(typeof bg === 'string') ? colors[bg] : bg] : '');
	return color + str + reset_str;
};
