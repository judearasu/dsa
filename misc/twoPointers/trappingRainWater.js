/**
 * Trapping Rain Water
 */

function trapping_rain_water(elevations) {
    const n = elevations.length;
    const left_walls = Array(n).fill(0);
    const right_walls = Array(n).fill(0);

    let max_left_wall = 0;
    for (let i = 0; i < n; i++) {
        left_walls[i] = max_left_wall;
        max_left_wall = Math.max(elevations[i], max_left_wall);
    }

    let max_right_wall = 0;
    for (let i = n - 1; i >= 0; i--) {
        right_walls[i] = max_right_wall;
        max_right_wall = Math.max(elevations[i], max_right_wall);
    }

    let total_water = 0;
    for (let i = 0; i < n; i++) {
        const elevation = elevations[i];
        const lowest_wall = Math.min(left_walls[i], right_walls[i]);
        if (lowest_wall > elevation) {
            total_water += lowest_wall - elevation;
        }

    }

    return total_water;
}
console.log(trapping_rain_water([3, 2, 1, 2, 2, 3, 2]))