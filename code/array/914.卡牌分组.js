export default (deck) => {
  deck.sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  let dst = [];
  let result = true;
  if (deck.length < 2) {
    result = false;
    return false;
  }
  for (let i = 0, len = deck.length, tmp = []; i < len; i++) {
    tmp.push(deck[i]);
    for (let j = i + 1; j < len + 1; j++) {
      if (deck[i] === deck[j]) {
        tmp.push(deck[j]);
      } else {
        if (min > tmp.length) {
          min = tmp.length;
        }
        // tmp是引用类型变量
        dst.push([].concat(tmp));
        tmp.length = 0;
        i = j - 1;
        break;
      }
    }
  }
  // console.log(dst);
  dst.every(item => {
    // if (min === 1) {
    //     result = false;
    //     return false;
    // }
    console.log(item.length);
    console.log(min);
    if (item.length % min !== 0 || min < 2) {
      result = false;
      return false;
    }
  });
  return result;
};
