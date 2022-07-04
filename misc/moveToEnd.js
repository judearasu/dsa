/**
 * Move Element to End
 */

function moveElementToEnd(array, toMove){
    let toMoveFound = 0;
    for(let x=0; x< array.length; x++){
        if(array[x] !== toMove){
            array[toMoveFound++] = array[x];
        }
    }
    for(let y=toMoveFound; y<array.length; y++){
        array[y] = toMove;
    }
    return array;
}

console.log(moveElementToEnd(array=[2,1,2,2,2,3,4,2],toMove=2))