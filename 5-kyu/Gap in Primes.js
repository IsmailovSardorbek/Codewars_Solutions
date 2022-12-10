function gap(g, m, n) {
    for(let i = m; i < n; i++) {
        let currentNumber = i

        let noPrimesBetween = true

        if(isPrime(currentNumber)) {
            var nextPrime = currentNumber + g

            if(isPrime(nextPrime)) {
                let noPrimesBetween = true

                for(let i = currentNumber + 1; i < nextPrime; i++) {
                    if(isPrime(i)) {
                        noPrimesBetween = false
                        break
                    }
                }
                if(noPrimesBetween) return [currentNumber, nextPrime]
            }
        }
    }
    return null
}

function isPrime(n) {
    if(n <= 1) return false

    let isPrime = true

    for(let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if(n % i === 0) {
            isPrime = false
            break
        }
    }
    return isPrime
}