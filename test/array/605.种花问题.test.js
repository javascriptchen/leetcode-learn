import method from '../../code/array/605.种花问题';
test('method:', () => {
expect(method([1, 0, 1, 0, 1, 0, 1], 0)).toBe(true);
});
test('method1:', () => {
expect(method([1, 0, 0, 0, 1], 1)).toBe(true);
});
test('method2:', () => {
expect(method([1, 0, 0, 0, 0, 1], 2)).toBe(false);
});
test('method3:', () => {
expect(method([1, 0, 1, 0, 1, 0, 1], 1)).toBe(false);
});
test('method4:', () => {
expect(method([0, 1, 0], 1)).toBe(false);
});
