Array.prototype.sortReloaded = function (dir) {
  return dir === 'asc' || dir === undefined
    ? [...this].sort((a, b) => a - b)
    : dir === 'desc'
    ? [...this].sort((a, b) => b - a)
    : false
}
