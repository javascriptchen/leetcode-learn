export default (n) => {
    function store (n) {
        if (n === 3 || n === 2 || n === 0) {
            return false;
        } else {
            n--;
            store(n);
        }
    }
    store(n);
};
