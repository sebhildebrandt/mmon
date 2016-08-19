function getTimeAgo(val) {
  let diff = new Date().getTime() - new Date(val).getTime();

  let period = {
      s: 1000,
      m: 60 * 1000,
      h: 60 * 60 * 1000,
      d: 24 * 60 * 60 * 1000,
//      week: 7 * 24 * 60 * 1000 * 60,
      M: 30 * 24 * 60 * 1000 * 60,
      Y: 365 * 24 * 60 * 1000 * 60
    },
    i,
    j;

  for (i in period) {
    if (diff < period[i]) {
      return makeupStr(j || 's', Math.round(diff / (period[j] || 1000)))
    }
    j = i
  }
  return makeupStr(i, Math.round(diff / period[i]))
}

function uptime(val) {
  let period = {
      s: 1,
      m: 60,
      h: 60 * 60,
      d: 24 * 60 * 60,
      w: 7 * 24 * 60 * 60,
      M: 30 * 24 * 60 * 60,
      Y: 365 * 24 * 60 * 60
    },
    i,
    j;

  for (i in period) {
    if (val < period[i]) {
      return makeupStr(j || 's', Math.round(val / (period[j] || 1)))
    }
    j = i
  }
  return makeupStr(i, Math.round(val / period[i]))
}

function makeupStr(unit, n) {
  return n + ' ' + unit
}

exports.getTimeAgo = getTimeAgo;
exports.uptime = uptime;

