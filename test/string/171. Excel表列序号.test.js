
import method from '../../code/string/171. Excel表列序号';
test('method:', () => {
expect(method('AB')).toBe(28);
expect(method('ZY')).toBe(701);
expect(method('AAA')).toBe(703);
});
