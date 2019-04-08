export default (arr) => {
    const arr1 = arr.map((item, index) => {
        return item.reverse().map(item1 => {
             item1 === 1 ? item1 = 0 : item1 = 1;
             return item1;
        });
    });
    return arr1;
};
