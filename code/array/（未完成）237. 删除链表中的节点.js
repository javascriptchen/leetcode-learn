export default (head, node) => {
    const len = head.length;
    if (len < 2) return;
    for (let i = 0; i < len; i++) {
        head.splice(node, 1);
    }
    return head;
};
