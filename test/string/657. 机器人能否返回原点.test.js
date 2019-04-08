import method from '../../code/string/657. 机器人能否返回原点';
test('method:', () => {
expect(method('UD')).toBe(true);
});
test('method2:', () => {
expect(method('UU')).toBe(false);
});
