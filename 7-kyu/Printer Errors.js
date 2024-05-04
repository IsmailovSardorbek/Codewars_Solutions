function printerError(s) {
  return `${[...s].filter((c) => c.charCodeAt() > 'm'.charCodeAt()).length}/${
    s.length
  }`
}
