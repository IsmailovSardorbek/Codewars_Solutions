function countChange(money, coins, n = 0) {
  if (money < 0) return 0;
  else if (money === 0) return 1;

  if (n === coins.length && money > 0) return 0;

  return (
    countChange(money - coins[n], coins, n) + countChange(money, coins, n + 1)
  );
}
