const factzero = require('./factzero')

test('5 should return 1', () => {
    expect(factzero(5)).toBe(1);
})

test("11 should return 2", () => {
    expect(factzero(11)).toBe(2);
});

test("8 should return 1", () => {
    expect(factzero(8)).toBe(1);
});
