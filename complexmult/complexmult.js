let complexmult = (a,b,c,d) => {
    real = (a*c) - (b*d)
    imagine = (b*c)+(a*d)
    answer = [real,imagine]
    return answer
}

module.exports = complexmult