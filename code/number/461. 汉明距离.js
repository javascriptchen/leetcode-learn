export default (x, y) => {
    let x2 = parseInt(x).toString(2);
    let y2 = parseInt(y).toString(2);
    let xl = x2.length;
    let yl = y2.length;
    let tl = 0;
    let count = 0;

    if (xl > yl) {
        y2 = Array(xl - yl + 1).join(0) + y2;
        tl = xl;
    } else {
        x2 = Array(yl - xl + 1).join(0) + x2;
        tl = yl;
    }
    for (let i = 0; i < tl; i++) {
        if (x2[i] !== y2[i]) {
            count++;
        }
    }
    return count;
};
