import method from '../../code/array/617. 合并二叉树';
test('method:', () => {
expect(method([1, 3, 2, 5], [2, 1, 3, null, 4, null, 7])).toEqual([3, 4, 5, 5, 4, null, 7]);
});
