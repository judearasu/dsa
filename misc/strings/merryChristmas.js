const fsPromises = require('fs').promises;

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile('merry-christmas.txt', 'utf8');
        await fsPromises.writeFile('happy-holidays.txt', merryChristmas(data));
    } catch (err) {
        console.log(err)
    }
}
fileOps();
var merryChristmas = function (num) {
    num = num ? num : 25;
    let tree = "";
    for (let x = 0; x < num; x++) {
        let low = 0;
        let high = 2 * num - 1;
        let mid = low + Math.floor((high - low) / 2);
        for (let z = 0; z < (2 * num - 1); z++) {
            if (z < mid - x || z > mid + x) {
                tree += " "
            } else {
                tree += "*"
            }
        }
        tree += "\n"
    }
    return tree;
}


var addSymbol = function (count, symbol) {
    let stars = "";
    for (let x = 1; x <= count; x++) {
        stars += symbol;
    }
    return stars;
}
