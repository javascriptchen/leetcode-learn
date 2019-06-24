export default (A, K) => {
    A.sort((a, b) => a - b);
    return A[A.length - 1] - A[0] - 2 * K > 0 ? (A[A.length - 1] - A[0]) - 2 * K : 0;
};
