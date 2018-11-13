let mersenne = num => {
    let isPrime = n => {
        if(n === 1) {
            return false
        }
        else if(n === 2) {
            return true
        }
        else {
            for(let i = 2 ; i < n ; i++) {
                if(n % i === 0) {
                    return false
                }
                else {
                    return true
                }
            }
        }
    }

    let numarray = []
    for(let j = 0 ; j <= num ; j++) {
        numarray.push(j)
    }
    let powerone = numarray.map(x => (2**x) - 1)
    if(isPrime(num) === true && powerone.includes(num)) {
        return true
    }
    else {
        return false
    }
}

module.exports = mersenne