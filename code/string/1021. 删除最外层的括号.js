export default (S) => {
    let length = S.length;
    let left = 0;
    let right = 0;
    let start = 0;
    let result = '';
    for (let i = 0; i < length; i++) {
        const e = S[i];
        if (e === '(') {
            left++;
        } else if (e === ')') {
            right++;
        }
        if (left === right) {
            result += S.slice(start + 1, i);
            start = i + 1;
        }
    }
    return result;
};
