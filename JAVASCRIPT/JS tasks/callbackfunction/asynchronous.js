// function start(){
//     console.log("start")
// }
//  //setTimeout(start,5000)
// setInterval(start,1000)
// function running(){
//     console.log("running")
// }
// running()
// let d=new Date();
// let num=1;
// function start(){
//     let d=new Date();
//    // document.getElementById("time").innerHTML=d
//      document.getElementById("time").innerHTML=d.toLocaleTimeString();
//     // document.getElementById("time").innerHTML=++num;
// }
// setInterval(start,1000);

async function data(){
await fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(json=>console.log(json))
}
data();