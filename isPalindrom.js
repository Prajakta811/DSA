//Number is palindeom or not 
function palindrome(num) {
    num=String(num)
    let temp=num.trim().split("").reverse().join("")
    if(temp==num)
    {
      console.log("Yes")
    }
    else
    {
      console.log("No")
    }
  }
  palindrome(1221)