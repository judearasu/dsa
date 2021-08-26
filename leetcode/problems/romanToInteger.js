let total = 0;
let i = 0;
let symList = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
while (i < s.length) {
    if (symList[s[i]] < symList[s[i + 1]]) {
        total = total + (symList[s[i + 1]] - symList[s[i]])
        i += 2;
    } else {
        total = total + symList[s[i]];
        i += 1;
    }
}