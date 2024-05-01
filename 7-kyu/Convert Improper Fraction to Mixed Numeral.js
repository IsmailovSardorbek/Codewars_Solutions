const convertToMixedNumeral = (parm) => {
  let left = +parm.split`/`.slice(0, 1).join``,
    right = +parm.split`/`.slice(-1).join``

  return Math.abs(left) < Math.abs(right)
    ? `${left}/${right}`
    : left % right
    ? `${parseInt(left / right) || ''} ${Math.abs(
        left % right
      )}/${right}`.trim()
    : `${left / right}`
}
