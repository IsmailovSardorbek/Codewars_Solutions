function switchDict(dic) {
  let values = [...new Set(Object.values(dic))],
    res = {}

  values.forEach((value) => {
    res[value] = []
    res[value] = [
      ...res[value],
      ...Object.keys(dic).filter((k) => dic[k] === value),
    ]
  })

  return res
}
