const howling = require('./howling')

test('113 is a howling prime number', () => {
    expect(howling(113)).toBe(true);
})

test('89 is a howling prime number', () => {
    expect(howling(89)).toBe(true);
})

test('19 is a howling prime number', () => {
    expect(howling(19)).toBe(false);
})
