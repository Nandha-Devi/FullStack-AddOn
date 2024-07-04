  function contManupulate(){
     let elem=document.getElementById("head")
     elem.innerHTML="HELLO!!!"
 }

// //setTimeout(contManupulate,5000) 

function darkmode(){
    document.body.style.backgroundColor="#872341";
    document.body.style.color="white";
    let button=document.getElementById("button")
    button.innerHTML=`<i class="bi bi-brightness-high"></i>`
    button.innerHTML+=" lightmode";
}

function lightmode(){
    document.body.style.backgroundColor="white";
    document.body.style.color="#872341";
    let button=document.getElementById("button")
    button.innerHTML=`<i class="fa-solid fa-moon"></i>`
    button.innerHTML+=" darkmode";
}

function modechange(){
    let btext=document.getElementById("button").innerText
    if(btext==" darkmode"){
        darkmode();
    }
    else if(btext==" lightmode"){
        lightmode();
    }
}