/**
 * Flatten
 * Time complexity o(n) Space complexity o(n)
 */

var flatten = function (nums) {
    const newArray = [];
    for (let i = 0; i < nums.length; i++) {
        const thisItem = nums[i];
        if (Array.isArray(thisItem)) {
            const flatItem = flatten(thisItem);
            for (let j = 0; j < flatten.length; j++) {
                newArray.push(flatItem);
            }
        } else {
            newArray.push(thisItem);
        }
    }
    return newArray;
}
console.log([[[[1], 2], 3], [4], [], [[5]]]);

/**
 * Line 12 may make this function seem like it’s O(n^2) - we have a for-loop inside a for-loop, which usually results in O(n^2).
 * However, the inner loop only processes what the outer loop skips over.\
 * For example, take the array [1, 2, [3, 4, 5], 6, 7]. The outer array only has 5 elements in it:

1
2
[3, 4, 5]
6
7
This means the outer forEach loop will essentially skip over 3, 4, and 5, leaving the inner for-loop to deal with those.

The final time complexity is:

O(n)
because the inner and outer loops operate on different items. No item is processed twice.
 */