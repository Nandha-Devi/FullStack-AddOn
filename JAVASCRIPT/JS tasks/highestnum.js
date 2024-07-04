//highest number
function highestnumbers(arr){
return Math.max(...arr)
}
console.log(highestnumbers([10,40,30,21]));
//lowest number
function lowestnumbers(arr){
    return arr.length>0?
    Math.min(...arr):null;
    }
    console.log(lowestnumbers([10,40,30,21]));