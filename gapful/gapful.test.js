const gapful = require('./gapful')

test('gapful number 192 should return true' , () => {
    expect(gapful(192)).toBe(true)
})

test('gapful number 210 should return false',() => {
    expect(gapful(210)).toBe(false)
})