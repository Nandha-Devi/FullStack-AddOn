function ispalindrom(s){
let right=0;
let left=s.length-1;
while(left<right)
{
    if(s[left] !== s[right])
    {
        return false;
    }
    left++;
    right--;
}
return true;
}
console.log(ispalindrom("noon"));
