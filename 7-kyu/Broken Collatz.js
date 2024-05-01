function collatz(n, count = 1) {
  while (n != 1) {
    count++
    n = n % 2 ? n * 3 + 1 : n / 2
  }

  return count
}
