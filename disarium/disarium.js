let disarium = num => {
    let numstring = num.toString()
    let numarray = numstring.split('')
    let arrayint = numarray.map(x => parseInt(x))
    let power = []
    let sumnum = 0
    for(let i = 0 ; i < arrayint.length ; i++) {
        power.push(arrayint[i]**(i+1))
    }
    power.forEach((val) => {
        sumnum += val
    })
    if(sumnum === num) {
        return true
    }
    else {
        return false
    }
}

module.exports = disarium