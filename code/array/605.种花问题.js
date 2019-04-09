export default (flowerbed, n) => {
    // len 能种几朵花
    // len2 还能种几朵花
    // len3 已经种了几朵花
    let flower = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] !== 1 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
            flower++;
            if (i + 2 !== 1) {
                i++;
            }
        }
        if (flower > n) break;
    }
    return flower >= n;
};
