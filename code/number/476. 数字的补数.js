export default (num) => {
    var value = parseInt(num).toString(2);
    var arr = [];
    for (var i = 0; i < value.length; i++) {
        arr[i] = value[i] === '0' ? '1' : '0';
    }
    arr = arr.join('');
    return parseInt(arr, 2);
};
