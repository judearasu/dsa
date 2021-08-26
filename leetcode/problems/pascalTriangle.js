/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let triangle = [];
    // Base Case; first row is always [1];
    triangle.push([1]);

    for (let rowNum = 1; rowNum < numRows; rowNum++) {
        let row = [];
        let prevRow = triangle[rowNum - 1];
        // The first row element is always 1;
        row.push(Array.of(1));

        // Each triangle element (other than the first and last of each row)
        // is equal to the sum of the elements above-and-to-the-left and
        // above-and-to-the-right.

        for(let j = 1; j<rowNum; j++){
            console.log(j, parseInt(prevRow[j-1]) + parseInt(prevRow[j]));
            row.push(Array.of(parseInt(prevRow[j-1]) + parseInt(prevRow[j])));
        }

        row.push(Array.of(1));
        triangle.push(row);
    }
    return triangle;
};

console.log(generate(5));