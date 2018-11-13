const complexmult = require('./complexmult')

test('1,2,3,4 should be return -5,10', () => {
    expect(complexmult(1,2,3,4)).toEqual([-5,10])
})
