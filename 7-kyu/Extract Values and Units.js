function valAndUnits(s) {
  return {
    val: +s.slice(
      0,
      [...s].findIndex(
        (e, i, a) =>
          !isNaN(Number(e)) && isNaN(Number(a[i + 1])) && a[i + 1] !== '.'
      ) + 1
    ),
    units: [...s].filter((e) => isNaN(Number(e)) && e !== '.' && e !== '-')
      .join``,
  }
}
