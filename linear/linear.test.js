const linear = require('./linear')

test('2x-3=1 x should be 2',() => {
    expect(linear('2x - 1 = 3')).toBe(2)
})

test('2x+1=3 x should be 1', () => {
    expect(linear('2x + 1 = 3')).toBe(1)
})

test('-15x+30=60 x should be -2',() => {
    expect(linear('-15x + 30 = 60')).toBe(-2)
})