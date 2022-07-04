/**
 * 128. Longest Consecutive Sequence
 * https://leetcode.com/problems/longest-consecutive-sequence/
 */

var longestConsecutive = function (nums) {
    let num_set = new Set(nums);
    let longestStreak = 0;
    for (let num of nums) {
        if (!num_set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            while (num_set.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))