/**
 * Write a function that accepts a 2D array of integer pixels (W x H) which represents an image, a threshold T and a number N.
The function should return a collection of size N of the pixels in the image which exceed the threshold T given.
The pixels must be chosen randomly such that repeated calls to the function return different sets.

Sample image (3 x 4):
+----+----+----+
|  23| 139|  54|
+----+----+----+
| 223|  59| 224|
+----+----+----+
|  33| 255|   4|
+----+----+----+
|  92|   1| 108|
+----+----+----+
T: 60
N: 4
 */

const image = [
    [23, 139, 54],
    [223, 59, 24],
    [330, 255, 400],
    [192, 1, 108]
]

var randomValues = function (threshold, number) {

    if (image.length < 0) {
        return false;
    }
    let thresholdArr = [];
    for(let rows = 0 ; rows < image.length; rows++){
        for(let cols = 0; cols < image.length; cols++){
            if(image[rows][cols] > threshold){
                thresholdArr.push(image[rows][cols])
            }
        }
    }
    let x = 0;
    let randomArr = [];
    while(x<number){
        rand = Math.floor(Math.random() * thresholdArr.length);
        if(randomArr.indexOf(thresholdArr[rand]) !== -1){
            continue;
        } 
        randomArr.push(thresholdArr[rand]);
        x++;
    }
    return randomArr;
}
console.log(randomValues(100, 4))
