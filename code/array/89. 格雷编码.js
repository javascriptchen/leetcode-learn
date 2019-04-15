export default (n) => {
    let grayCode = (n) => {
        if (n === 0) {
            return ['0'];
        } else if (n === 1) {
            return ['0', '1'];
        } else {
            let prev = grayCode(n - 1);
            let result = [];
            let max = Math.pow(2, n) - 1;
            // console.log(max);
            for (let i = 0, len = prev.length; i < len; i++) {
                result[i] = `0${prev[i]}`;
                result[max - i] = `1${prev[i]}`;
            }
            return result;
        }
    };
    return grayCode(n).map(item => {
        return parseInt(item, 2);
    });
};
