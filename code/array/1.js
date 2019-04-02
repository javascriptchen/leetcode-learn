export default (nums, target) => {
    if (nums.length >= 2) {
        for (let i = 0, il = nums.length; i < il; i++) {
            for (let j = i + 1, jl = nums.length; j < jl; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
        return [];
    } else {
        return [];
    }
};
