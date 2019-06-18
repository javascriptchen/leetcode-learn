export default (A) => {
    const maxNum = Math.max.apply(null, A);
    return A.indexOf(maxNum);
};
