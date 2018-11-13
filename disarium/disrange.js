const disarium = require('./disarium')

// let bool = []
for(let n = 0 ; n < 10000 ; n++) {
    if(disarium(n) === true) {
        console.log(n)
    }
}

