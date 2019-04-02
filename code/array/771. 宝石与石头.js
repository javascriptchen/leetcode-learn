export default (J, S) => {
    if (J.length > 0 && S.length > 0) {
        let flag = 0;
        for (let i = 0; i < J.length; i++) {
            for (let j = 0; j < S.length; j++) {
                if (J[i] === S[j]) {
                    flag++;
                }
            }
        }
        return flag;
    }
};
