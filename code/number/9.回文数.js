export default (x) => {
    // const arr = x.split('');
    x = x + '';
    // let arr1 = '';
    // console.log(x);
    for (let i = 0; i < Math.ceil(x.length - 1 / 2); i++) {
        if (x[i] !== x[x.length - i - 1]) {
            return false;
        }
    }
    return true;
};
