export default (str) => {
    // return str.split(/\s/g).map(item => item.split('').reverse().join('')).join(' ');
    // console.log(str.match(/[\w']+/g));
    return str.match(/[\w']+/g).map(item => item.split('').reverse().join('')).join(' ');
};
