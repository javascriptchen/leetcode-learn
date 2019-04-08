import method from '../../code/array/942. 增减字符串匹配';
test('method:', () => {
expect(method('IDID')).toEqual([0, 4, 1, 3, 2]);
});
test('method1:', () => {
expect(method('III')).toEqual([0, 1, 2, 3]);
});
