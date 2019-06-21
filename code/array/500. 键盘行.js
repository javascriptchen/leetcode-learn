export default (words) => {
    let regexp = /^([qwertyuiop]+|[asdfghjkl]+|[zxcvbnm]+)$/i;
    return words.filter((word) => {
        return regexp.test(word);
    });
};
