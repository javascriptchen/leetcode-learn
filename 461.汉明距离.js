/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 *
 * https://leetcode-cn.com/problems/hamming-distance/description/
 *
 * algorithms
 * Easy (68.60%)
 * Total Accepted:    16.2K
 * Total Submissions: 23.6K
 * Testcase Example:  '1\n4'
 *
 * 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
 *
 * 给出两个整数 x 和 y，计算它们之间的汉明距离。
 *
 * 注意：
 * 0 ≤ x, y < 2^31.
 *
 * 示例:
 *
 *
 * 输入: x = 1, y = 4
 *
 * 输出: 2
 *
 * 解释:
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 * ⁠      ↑   ↑
 *
 * 上面的箭头指出了对应二进制位不同的位置。
 *
 *
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let x2 = parseInt(x).toString(2);
    let y2 = parseInt(y).toString(2);
    let xl = x2.length;
    let yl = y2.length;
    let tl = 0;
    let count = 0;

    if (xl > yl) {
        y2 = Array(xl - yl + 1).join(0) + y2;
        tl = xl;
    } else {
        x2 = Array(yl - xl + 1).join(0) + x2;
        tl = yl;
    }
    for (let i = 0; i < tl; i++) {
        if (x2[i] !== y2[i]) {
            count++;
        }
    }
    return count;
};
