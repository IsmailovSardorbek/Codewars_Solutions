function alternate(items) {
  return items.length > 0
    ? Boolean(items.reduce((acc, cur) => acc | cur, false))
    : null
}
