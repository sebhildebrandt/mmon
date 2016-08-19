'use strict';
// ==================================================================================
// draw.js
// ----------------------------------------------------------------------------------
// Description:   tiny CLI draw library
//                for Node.js
// Copyright:     (c) 2016
// Author:        Sebastian Hildebrandt
// ----------------------------------------------------------------------------------
// Contributors:  -
// ----------------------------------------------------------------------------------
// License:       MIT
// ==================================================================================

let cols = require('./cols');

// string with protion on left side, width chars long
function strLeft(s, width) {
  s = s || '';
  if (s.length < width) {
    s = s + ' '.repeat(width - s.length);
  } else {
    s = s.substr(0,width);
  }
  return s;
}
exports.strLeft = strLeft;

// string with protion on right side, width chars long
function strRight(s, width) {
  s = s || '';
  if (s.length < width) {
    s = ' '.repeat(width - s.length) + s;
  } else {
    s = s.substr(0,width);
  }
  return s;
}
exports.strRight = strRight;

// string with protion on left side of existing string, width chars long
function strAddLeft(line, s, width) {
  width = width || 0;
  if (width) {
    line = strLeft(line || '', width);
  } else {
    width = line.length;
  }
  s = s || '';
  s = s.substring(0, width - 1);
  return s + line.substr(-1 * (width - s.length));
}
exports.strAddLeft = strAddLeft;

// string with protion on right side of existing string, width chars long
function strAddRight(line, s, width) {
  width = width || 0;
  if (width) {
    line = strLeft(line || '', width);
  } else {
    width = line.length;
  }
  s = s || '';
  s = s.substring(0, width - 1);

  return line.substr(0, (width - s.length)) + s;
}
exports.strAddRight = strAddRight;

// add protion to position of existing string, result is width chars long
function strAdd(line, s, position, width) {
  width = width || 0;
  if (width) {
    line = strLeft(line || '', width);
  } else {
    width = line.length;
  }
  position = position || 0;
  s = s || '';
  s = s.substring(0, width - 1);
  return line.substr(0, position - 1) + s + line.substr(-1 * (width - s.length - position + 1));
}
exports.strAdd = strAdd;

function fmtNum(num, fixed, len, warn, alert) {
  warn = warn || 999999999;
  alert = alert || 999999999;
  let color = '';
  if (num > warn) color = 'yellow';
  if (num > alert) color = 'red';
  return cols.log((' '.repeat(len) + num.toFixed(fixed)).substr(-len), color);
}
exports.fmtNum = fmtNum;

// progress bar, size chars long, with optional warning cols and optional showpercent
// console.log('CPU: ' + progress(9.234,30, true, true));
function progress(percent, size, warn, showpercent) {
  size = size || 10;
  percent = percent || 0;
  if (percent < 0) percent = 0;
  if (percent > 100) percent = 100;
  warn = warn || false;
  showpercent = showpercent || false;

  let block = String.fromCharCode(0x2588);
  let barlength = Math.round(percent * size / 100.0);
  let col = 'gray';
  if (warn) {
    if (percent > 0) col = 'green';
    if (percent > 70) col = 'yellow';
    if (percent > 85) col = 'red';
  }
  let bar = '|' + cols.log(block.repeat(barlength), col) + '.'.repeat(size - barlength) + '|';
  if (showpercent) {
    bar = bar + ' ' + ('  ' + parseInt(percent)).substr(-3) + '%'
  }
  return (bar);
}
exports.progress = progress;

// position cursor + write string at this position
function pos(line, col, str) {
  // '\033'  = ESC = 0x1b
  console.log(String.fromCharCode(0x1b) + '[' + line + ';' + col + 'f' + str);
}
exports.pos = pos;

// clear screen
function clear() {
  console.log('\x1Bc');
}
exports.clear = clear;

// clear line
function clearline() {
  console.log('\x1b[K');
}
exports.clearline = clearline;

// cursor up
function up(count) {
  count = count || 1;
  count = count + 1;
  console.log(String.fromCharCode(0x1b) + '[' + count + 'A')
}
exports.up = up;

// hide cursor
function hide() {
  console.log('\x1B[?25l')
}
exports.hide = hide;

// show cursor
function show() {
  console.log('\x1B[?25h')
}
exports.show = show;
