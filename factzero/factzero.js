let factzero = num => {
    let factorial = i => {
        if(i === 0) {
            return 1
        }
        else {
            return i * factorial(i-1)
        }
}
    let numfact = factorial(num)
    let numarray = numfact
        .toString()
        .split('')
        .map(x => parseInt(x))
        .reverse()
    let countzero = 0
    for(let i = 0 ; i < numarray.length ; i++) {
        if(numarray[i] === 0) {
            countzero++
        }
        else {
            break
        }
    }
    return countzero
}

module.exports = factzero
