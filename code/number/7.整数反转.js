export default (x) => {
    let result = '';
    x = x + '';
    let len = x.length;

    // 反转字符串
    for (let i = len - 1; i >= 0; i--) {
        result += x[i];
    }
    // 字符串前面有没有0
    result = parseInt(result);

    if (x < 0) {
        result = -result;
    }
    // console.log(Math.abs(-100));
    if (result >= Math.pow(2, 31) - 1 || result <= Math.pow(-2, 31)) {
        return 0;
    }

    return result;
};
