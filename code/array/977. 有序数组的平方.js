export default (A) => {
    if (A.length) {
        const arr = A.map(item => {
            return Math.abs(item);
        });
        let tem;
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    tem = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tem;
                }
            }
        }
        const arr1 = arr.map(item => {
            return Math.pow(item, 2);
        });
        return arr1;
    } else {
        return [];
    }
};
