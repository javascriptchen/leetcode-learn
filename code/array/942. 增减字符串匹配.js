export default (S) => {
    let len = S.length;
    let max = len;
    let min = 0;
    let arr = [];
    for (let i = 0; i < len + 1; i++) {
        if (S[i] === 'I') {
            arr.push(min);
            min++;
        } else {
            arr.push(max);
            max--;
        }
    }
    return arr;
};
