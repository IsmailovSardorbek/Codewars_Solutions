function isSortedAndHow(array) {
  return [...array].sort((a, b) => a - b).join('') === [...array].join('')
    ? 'yes, ascending'
    : [...array].sort((a, b) => b - a).join('') == [...array].join('')
    ? 'yes, descending'
    : 'no'
}
