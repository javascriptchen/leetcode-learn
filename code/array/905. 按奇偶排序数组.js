export default (A) => {
    let odd = [];
    let even = [];
    A.forEach(element => {
        element % 2 === 0 ? even.push(element) : odd.push(element);
    });
    return even.concat(odd);
};
