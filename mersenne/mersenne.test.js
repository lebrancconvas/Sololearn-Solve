const mersenne = require('./mersenne')

test('3 is a mersenne prime number', () => {
    expect(mersenne(3)).toBe(true)
})

test('31 is a mersenne prime number', () => {
    expect(mersenne(31)).toBe(true)
})

test('17 is a mersenne prime number', () => {
    expect(mersenne(17)).toBe(false)
})
