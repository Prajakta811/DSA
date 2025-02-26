// You are given a number, stored in a variable named N. Your task is to determine whether N is divisible by 3.
// A number that is divisible by 3 will be evenly divisible, meaning no remainder or fractional part after division.
function isDivisibleBy3(N)
{
  if(N%3==0)
  {
    console.log("Yes")
  }
  else
  {
    console.log("No")
  }
}
isDivisibleBy3(6)