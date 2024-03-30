function mixFruit(arr) {
  let simple = ['banana', 'orange', 'apple', 'lemon', 'grapes'],
    special = ['avocado', 'strawberry', 'mango']

  return Math.round(
    arr
      .map((f) =>
        simple.includes(f.toLowerCase())
          ? 5
          : special.includes(f.toLowerCase())
          ? 7
          : 9
      )
      .reduce((acc, cur) => acc + cur, 0) / arr.length
  )
}
