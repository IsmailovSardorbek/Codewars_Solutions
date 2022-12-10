/*
     Example:
     moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */

function moveZeros(arr) {
    return [...arr.filter(x => x !== 0), ...arr.filter(x => x === 0)]
}