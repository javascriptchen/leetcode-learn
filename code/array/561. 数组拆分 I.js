export default (nums) => {
    nums.sort((a, b) => a - b);// 排序
    let len = nums.length;
    const result = []; // 原数组拆分成两个数字一组的数组
    let total = 0;// 总数
    for (let i = 0; i < len; i += 2) {
        result.push(nums.slice(i, i + 2));
    }
    for (let j = 0; j < len / 2; j++) {
        total += result[j][0];
    }
    return total;
};
