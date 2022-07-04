/**
 * 347. Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements/
 */

var topKFrquent = function (nums, k) {
    const freqMap = nums.reduce((map, curr) => {
        map[curr] = map[curr] + 1 || 1;
        return map
    }, {});

    const bucket = Object.entries(freqMap).reduce((bucket, [num, freq]) => {
        bucket[freq] = bucket[freq] || [];
        bucket[freq].push(num)
        return bucket
    }, {})

    const ans = [];

    for (let i = nums.length; i >= 0; i--) {
        if (!bucket[i]) continue
        for (let num of bucket[i]) {
            ans.push(num)
            if (ans.length === k) return ans;
        }
    }

}
nums = [1, 1, 1, 2, 2, 3], k = 2
console.log(topKFrquent(nums, k))