function guessGifts(wishlist, presents) {
  let result = [];

  presents.forEach((present) => {
    let item = wishlist.filter(
      (p) =>
        p.size === present.size &&
        p.clatters === present.clatters &&
        p.weight === present.weight
    );
    if (item) {
      result[result.length] = item;
    }
  });
  return [
    ...new Set(
      result
        .map((e) => e.map((s) => s.name).join("-"))
        .join("-")
        .split("-")
    ),
  ];
}
