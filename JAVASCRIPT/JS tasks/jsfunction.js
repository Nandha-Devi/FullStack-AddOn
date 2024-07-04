//function parametrised
let a=40;
function functionName(){
    ++a;

}

console.log(a)
//--
let b=50;
function functionName(b){
    ++b;

}
functionName(50);
console.log(b)
//--

function functionName(c){
    ++c;
    return c;
}
console.log(functionName(60))

//--
function add(x,y){
    return  x+y;
}
console.log(add(5,10))

function sub(c,d){
    return  c-d;
}
console.log(sub(5,10))

function mult(c,d){
    return  c*d;
}
console.log(mult(5,10))

function div(c,d){
    return  c/d;
}
console.log(div(5,10))
//seperator
//number.length
function add(...numbers){
    var total=0;
    for (let i=0;i<numbers.length;i++){
    total+=numbers[i]}
    return total;
 }
 console.log(add(5,10,90,86))
 








