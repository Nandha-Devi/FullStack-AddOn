function handleRegister(event){
    event.preventDefault();
    let user=document.getElementById("user").value
    let pass=document.getElementById("pass").value

let userDetails;
let arr=[]
if(user==""){
    alert("Enter your name")
}else if(pass==""){
    alert("enter your password")
}else{
    userDetails={
        name:user,
        password:pass
    }
   let arrobj=localStorage.getItem("userDetails");
   if (arrobj){
    arrobj=JSON.parse(arrobj)
    arr=arr.concat(arrobj);
    arr.push(userDetails)
    localStorage.setItem("userDetails",JSON.stringify(arr))

   }else{
    localStorage.setItem("userDetails",JSON.stringify(userDetails));
   }
//    window.location.href("./form/loginform.html")
   window.location.replace("http://127.0.0.1:5500/loginpage.html")
}

}
function handleLogin(event){
    event.preventDefault();
    let user=document.getElementById("user").value
    let pass=document.getElementById("pass").value
    let arr = []
    if(user==""){
        alert("Enter your name")
    }else if(pass==""){
        alert("enter your password")
    }else{
    let arrobj=localStorage.getItem("userDetails");
    console.log(JSON.parse(arrobj));
    console.log(arrobj);
    let correctUser=false;
    let correctPass=false;
    arrobj=JSON.parse(arrobj);
    arrobj.map((value)=>{
       
        if(value.username==user){
            correctUser=true;
            if(value.password==pass){
                correctPass=true;
               
            }
        }
    })
    if(correctUser && correctPass){
    alert("Login Successful")
    }else if(correctUser){
        alert("Enter correct password")
    }else{
    alert("Enter correct name")
}
}
}
