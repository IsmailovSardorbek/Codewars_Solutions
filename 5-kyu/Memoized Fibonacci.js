function fibonacci(n) {
    if(n === 0) return 0
    let fib = [1, 1];

    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 2] + fib[i - 1]);
    }
    return fib.pop()
}