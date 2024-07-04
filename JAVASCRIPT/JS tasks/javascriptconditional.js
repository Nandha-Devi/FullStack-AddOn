//conditonal types
var age=20;
if (age<35)
{
    console.log("you're are not eligible");
}
else
{
    console.log("ThankYou");
}

//------------
var age=60;
if (age<20 && age<60)
{
    console.log("you're are eligible");
}
else if(age>=60 && age<=70)
{
    console.log("Thank you for you're valuable time")
}
else
{
    console.log("you're are not eligible");
}

//Nested if
var age=55;
if (age>20 && age<60)
{
    if(age>=50)
    {
        console.log("Thank you for you're valuable time")
    }
}
else
{
    console.log("you're are not eligible");
}

//Switch
switch(3){
    case 1:
    console.log("case1")
    break;
    case 2:
        console.log("case2")
    break;
    case 3:
        console.log("case3")
    break;
    default:
        console.log("default")
}
const mark=30
switch(true)
{
    case mark>30 :
    console.log("pass")
    break;
    case mark<30:
        console.log("fail")
    break;

    default:
        console.log("default")
}
//looping
    //for
for(let i=5;i<10;i++)
    {
       console.log(i);
    }
    //---
    for(let i=4;i<10;i++)
        if(i%2==0)
    {
       console.log(i);
    }
    //---
    for(let i=4;i<10;i=i+4)
    {
       console.log(i);
    }
    //pattern printing 
    let hash=" ";
    for(let i=5;i<10;i++)
    {
        for(let j=4;j<10;j++){
            hash+="# "

        }
       console.log(hash);
       hash=" ";
    }
    //---
    let star="";
    for(let row=0;row<5;row++)
    {
        for(let col=0;col<5;col++){
            star+="*"
        }
       console.log(star);
       hash="";
    }
    //while
    var on=true;
    var count=1;
    while(on)
    {
      console.log("Running");
        if(count == 3) 
        {
            on=false;
        }
        count++;
    }
    //Dowhile
    var on=false;
    do{
        console.log("running");
    }
    while(on)
   ///JUMP statement
    //break
    var on=true;
    var count=1;
    while(on)
    {
      console.log("Running");
        if(count == 3)
        {
            break;
        }
        count++;
    }
    //continue
    var on=true;
    var count=1;
    while(on)
    {
      console.log("Running");
      console.log(count)
        if(count == 3)
        {
        continue;
        }
        count++;
    }
    