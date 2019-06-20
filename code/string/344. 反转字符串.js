export default (s) => {
    if (!s.length) return;
    let len = Math.floor(s.length / 2);
    for (let i = 0; i < len; i++) {
        let item = s[s.length - (i + 1)];
        s[s.length - (i + 1)] = s[i];
        s[i] = item;
    }
    return s;
};
