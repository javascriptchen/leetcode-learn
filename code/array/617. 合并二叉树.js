export default (t1, t2) => {
    const arr = [];
    if (t1 && t2) {
        const max = t1.length > t2.length ? t1.length : t2.length;

        for (let i = 0; i < max; i++) {
            let sum;
            if (t1[i] && t2[i]) {
                sum = t1[i] + t2[i];
            } else if (!t1[i]) {
                sum = t2[i];
            } else if (!t2[i]) {
                sum = t1[i];
            } else {
                sum = null;
            }
            arr.push(sum);
        }
        return arr;
    } else {
        return false;
    }
};
