/**
 * 735 : Asteroid Collision
 * https://leetcode.com/problems/asteroid-collision/
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let res = [];
    for (let a of asteroids) {
        if (a > 0) {
            res.push(a);
        } else {
            while (res.length !== 0 && res[res.length - 1] > 0 && res[res.length - 1] < Math.abs(a)) {
                res.pop(a);
            }
            if (res.length === 0 || res[res.length - 1] < 0) {
                res.push(a);
            } else if (res[res.length - 1] === Math.abs(a)) {
                res.pop();
            }
        }
    }
    return res;
};