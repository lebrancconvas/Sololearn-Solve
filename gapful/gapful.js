let gapful = num => {
    let numstring = num.toString()
    let firstdigit = numstring[0]
    let lastdigit = numstring[numstring.length - 1]
    let newnumstring = firstdigit + lastdigit
    let newnum = parseInt(newnumstring)
    
    if(num % newnum === 0) {
        return true
    }
    else {
        return false
    }
}

module.exports = gapful