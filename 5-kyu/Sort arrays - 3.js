sortme = function (courses) {
  return courses
    .sort()
    .map((x) => [x, x.split("-").slice(-1).join("")])
    .sort((a, b) => a[1] - b[1])
    .map((x) => x[0]);
};
