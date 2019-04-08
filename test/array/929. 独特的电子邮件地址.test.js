import method from '../../code/array/929. 独特的电子邮件地址';
test('method:', () => {
expect(method(['test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@lee.tcode.com'])).toBe(2);
});
