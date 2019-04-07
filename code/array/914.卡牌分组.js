export default (deck) => {
    deck.sort((a, b) => a - b);
    let min = Number.MAX_SAFE_INTEGER;
    let dst = [];
    let result = true;
    for (let i = 0, len = deck.length, tmp = []; i < len; i++) {
        tmp.push(deck[i]);
        for (let j = i + 1, len = deck.length; j < len - 1; j++) {
            if (deck[i] === deck[j]) {
                tmp.push(deck[j]);
            } else {
                if (min > tmp.length) {
                    min = tmp.length;
                }
                // tmp是引用类型变量
                dst.push([].concat(tmp));
                tmp.length = 0;
                i = j;
                break;
            }
        }
    }
    dst.every(item => {
        if (item.length % min !== 0) {
            result = false;
            return false;
        }
    });
    return result;
};
