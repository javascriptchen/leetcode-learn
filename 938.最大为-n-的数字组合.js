/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 最大为 N 的数字组合
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */

var rangeSumBST = function (root, L, R) {
    let sum = 0;
    let trace = (root, L, R) => {
        if (root === null) {
            return null;
        }
        trace(root.right, L, R);
        if (root.val <= R && root.val >= L) {
            sum += root.val;
        }
        trace(root.left, L, R);
    };
    trace(root, L, R);
    return sum;
};
