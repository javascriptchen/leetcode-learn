export default (str) => {
    // 建立电话号码键盘映射
    let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    // 传入的字符串转为数组
    let num = str.split('');
    // 按键的映射
    let code = [];
    num.forEach(item => {
        if (map[item]) {
            code.push(map[item]);
        }
    });

    let comb = (arr) => {
        if (!arr || !arr[0].length || !arr[1].length) {
            return;
        }
        let temp = [];
        for (let i = 0, il = arr[0].length; i < il; i++) {
            if (!arr[1]) {
                return arr[0].split('');
            }
            for (let j = 0, jl = arr[1].length; j < jl; j++) {
                temp.push(`${arr[0][i]}${arr[1][j]}`);
            }
        }
        // 删掉arr[0],arr[1]，插入temp
        arr.splice(0, 2, temp);
        if (arr.length > 1) {
            comb(arr);
        } else {
            return temp;
        }
        return arr[0];
    };

    return comb(code);
};
