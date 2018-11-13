const labnumber = require('./labnumber')

test('8 is a Lab Number',() => {
    expect(labnumber(8)).toBe(true)
})

test('50 is a Lab Number', () => {
    expect(labnumber(50)).toBe(true)
})
