export default (A) => {
    if (!A) return null;
    let len = A.length;
    let arr = [];
    let num = 0;
    for (let i = 0; i < len; i++) {
        if (!arr.includes(A[i])) {
            arr.push(A[i]);
        } else {
            num = A[i];
        }
    }
    return num;
};
