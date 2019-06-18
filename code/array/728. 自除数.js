export default (left, right) => {
    let arr = [];
    if (left < 0 && right - left < 0) return false;
    for (let i = left; i <= right; i++) {
        i = i + '';
        // console.log(i);
        let flag = true;
        for (let j = 0; j < i.length; j++) {
            if (i % i[j] !== 0) {
                flag = false;
                break;
            }
        }
        flag && arr.push(Number(i));
    }
    return arr;
};
