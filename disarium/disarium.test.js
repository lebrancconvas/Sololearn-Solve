const disarium = require('./disarium')

test('135 is a disarium number', () => {
    expect(disarium(135)).toBe(true)
})

test('88 isn\'t a disarium number', () => {
    expect(disarium(88)).toBe(false)
})

test('1 is a disarium number', () => {
    expect(disarium(1)).toBe(true)
})

test('518 is a disarium number', () => {
    expect(disarium(518)).toBe(true)
})

test('175 is a disarium number', () => {
    expect(disarium(175)).toBe(true)
})

