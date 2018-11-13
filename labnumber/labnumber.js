let labnumber = num => {
    let numdividable = []
    for(let i = 0 ; i <= num ; i++) {
        if(num % i === 0) {
            numdividable.push(i)
        }
    }
    console.log(numdividable)
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
                else if (n === 2) {
                    return true
                }
                else {
                    return true
                }
            }
        }
    }
    let numdiprime = numdividable.filter(x => isPrime(x) === true)
    let numdiprimesq = numdiprime.map(x => x**2)
    let lab = []
    numdiprimesq.forEach((val) => {
        if(numdividable.includes(val)) {
            lab.push(val)
        }
    })
    if(lab.length === 0) {
        return false
    }
    else {
        return true
    }
}

module.exports = labnumber