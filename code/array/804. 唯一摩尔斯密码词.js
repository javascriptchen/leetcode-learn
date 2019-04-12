export default (words) => {
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let codeArr = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];
    let resultArr = new Set();
    words.forEach(element => {
        let string = '';
        element.split('').forEach(item => {
            let num = arr.indexOf(item);
            console.log(codeArr[num]);
            string = string + codeArr[num];
        });
        resultArr.add(string);
    });
    return resultArr.size;
};
