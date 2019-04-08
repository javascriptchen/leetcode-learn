export default (moves) => {
    let yuandian = [0, 0];
    moves.split('').forEach(element => {
        switch (element) {
            case 'U':
                yuandian[1]++;
                break;
            case 'D':
                yuandian[1]--;
                break;
            case 'L':
                yuandian[0]++;
                break;
            case 'R':
                yuandian[0]--;
                break;

            default:
                break;
        }
    });
    if (yuandian[0] === 0 && yuandian[1] === 0) {
        return true;
    } else {
        return false;
    }
};
