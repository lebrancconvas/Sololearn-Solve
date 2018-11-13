const triangle = require('./triangle')

test('Triangle with 3 4 5 is Triangle',() => {
    expect(triangle(3,4,5)).toBe(true)
})

test('Triangle with 10 2 9 is Triangle',() => {
    expect(triangle(10,2,9)).toBe(true)
})

test('Triangle with 7 9 1 isn\'t Triangle', () => {
    expect(triangle(7,9,1)).toBe(false)
})
