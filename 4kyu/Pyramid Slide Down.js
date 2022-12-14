function longestSlideDown(pyramid) {
  if (pyramid.length === 1) {
    return pyramid[0][0];
  } else {
    const last = pyramid.pop();
    const maxCouples = last
      .map((e, i) => (i === 0 ? 0 : Math.max(e, last[i - 1])))
      .slice(1);
    pyramid[pyramid.length - 1] = pyramid[pyramid.length - 1].map(
      (e, i) => e + maxCouples[i]
    );
    return longestSlideDown(pyramid);
  }
}
