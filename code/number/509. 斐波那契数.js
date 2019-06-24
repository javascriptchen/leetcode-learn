export default (N) => {
    var memory = {};

    function fib (N) {
        if (N === 1 || N === 0) {
            return N;
        }
        if (!memory[N - 2]) {
            memory[N - 2] = fib(N - 2);
        }
        if (!memory[N - 1]) {
            memory[N - 1] = fib(N - 1);
        }
        return memory[N] = memory[N - 1] + memory[N - 2];
    };
    return fib(N);
};
