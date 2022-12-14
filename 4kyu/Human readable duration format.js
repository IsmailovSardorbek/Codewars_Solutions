function formatDuration(s) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
    result = [];

  if (s === 0) return "now";

  for (var key in time) {
    if (s >= time[key]) {
      var val = Math.floor(s / time[key]);
      result.push((val += val > 1 ? " " + key + "s" : " " + key));
      s = s % time[key];
    }
  }

  return result.length > 1
    ? result.join(", ").replace(/,([^,]*)$/, " and" + "$1")
    : result[0];
}
