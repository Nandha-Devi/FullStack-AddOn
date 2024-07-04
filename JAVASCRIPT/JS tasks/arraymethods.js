 //array methods
 let arr =[23,79,5,40]
 console.log(arr.push(5))
 console.log(arr.pop(23))
 console.log(arr.concat(30,7,4))
 console.log(arr.shift())
 console.log(arr.indexOf(5))
 console.log(arr.sort()) 

// //object
 let obj={
     tamil:50,
     english:60,
     science:54
 }
let keys=Object.keys(obj);
console.log(keys)
 //Math
 console.log(Math.round(Math.random()*100))
 console.log(Math.round(1.5))
 //random number generator
 function randomnumber(start,end){
let randnum=Math.random()*end;
while(start>randnum)
{
   randnum=Math.random()*end;
}
return randnum;
 }
 console.log(randomnumber(10,100));
 ///
 //let arr=[10,20,43,54]
 console.log(Math.min(...arr));
 console.log(Math.max(...arr));
 