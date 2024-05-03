function every(arr, interval, start) {
  let res = []

  for (let i = start || 0; i < arr.length; i += interval || 1) {
    res = [...res, arr[i]]
  }

  return res
}
