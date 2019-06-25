export default (s) => {
    let sum = 0;

    function code (s) {
        for (let i = 0; i < s.length; i++) {
            sum += (s[i].charCodeAt() - 64) * Math.pow(26, (s.length - i - 1));
        }
    }
    code(s);
    return sum;
};
