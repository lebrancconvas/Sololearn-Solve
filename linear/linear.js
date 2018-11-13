let linear = equation => {
    // ax + b = c
    // Split the Equation that in the form of String
    let linearslice = equation
        .split('')
        .filter(x => x !== ' ')

    //Replace the another symbol into 'x' for easy to split
    let xreplace = linearslice.indexOf('=')
    linearslice[xreplace] = 'x'
    
    //Make an array with three value a,b,c
    let value = linearslice
        .join('')
        .split('x')
        .map(val => parseInt(val))
    
    //Find x 
    let x = (value[2] - value[1]) / value[0]
    return x
}

module.exports = linear