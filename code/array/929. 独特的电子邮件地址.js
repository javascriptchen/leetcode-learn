export default (emails) => {
    let arr = emails.map(item => {
        let email = item.split('@')[0];
        let email1 = email.split('+')[0];
        let email2 = email1.replace(/\./g, '');
        return email2 + '@' + item.split('@')[1];
    });
    arr = [...new Set(arr)];
    return arr.length;
};
