export default (heights) => {
    let deepClone = obj => {
        let newObj = Array.isArray(obj) ? [] : {};

        for (var k in obj) {
            if (obj.hasOwnProperty(k)) {
                newObj[k] = typeof obj[k] === 'object' ? deepClone(obj[k]) : obj[k];
            }
        }
        return newObj;
    };
    const newArr = deepClone(heights);
    heights.sort((a, b) => a - b);
    console.log(heights);
    console.log(newArr);
    // return;
    let num = 0;

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== newArr[i]) {
            num++;
        }
    }
    return num;
};
