const sum = require('./sum')

test("add 1 plus 2 to be 3", () => {
  expect(sum(1,2)).toBe(3);
});
