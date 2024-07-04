//slice and substring

// const arr=[10,20,30,40];
// const fullName="RADHA";
// console.log(fullName.substring(1,4))
// console.log(arr.slice(1,3))

//splice
// const arr=[10,20,30,40];
// // const fullName="RADHA";

// console.log(arr.splice(1,4,54))

//DESTRUCTING
//for array
// let array=[10,30,23];
// let [a,b,c]=array;
// console.log(c);

// //forobject
// let obj={
//     Name:  "Radha",
//     age:40
// }
// let{Name,age}=obj;
// console.log(age)

//CLOSURE

function parent(){
    const a=20;
    function child(){
        console.log(a);
    }
return child;
}
const closure= parent();
closure();