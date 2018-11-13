let howling = num => {
    let numarray = num
        .toString()
        .split('')
        .map(x => parseInt(x))
    let isPrime = n => {
        if (n === 1) {
            return false
        } 
        else if (n === 2) {
            return true
        } 
        else {
            for (let i = 2; i < n; i++) {
                if (n % i === 0) {
                    return false
                } 
                else {
                    return true
                }
            }
        }
    }
    let sum = 0
    numarray.forEach((val) => {
        sum += val
    })
    if(isPrime(num) === true && isPrime(sum) === true) {
        return true
    }
    else {
        return false
    }
}

module.exports = howling