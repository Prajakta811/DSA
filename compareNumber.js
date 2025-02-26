// You are given two numbers stored in two variables, with the name, num1 and num2.

// Print the result of the following operations:

// num1 > num2 -> this operation prints true, if num1 is greater than num2, otherwise it prints false
// num1 < num2 -> this operation prints true, if num1 is smaller than num2, otherwise it prints false
// num1 == num2 -> this operation print true, if num1 is equal to num2, otherwise it prints false
// 4 16  output:false true false
function compareNumber(num1,num2)
{
  if(num1>num2)
  {
    console.log("true")
  }
  else
  {
    console.log("false")
  }
   if(num1<num2)
   {
    console.log("true")
  }
  else
  {
    console.log("false")
  }
  if (num1==num2)
  {
    console.log("true")
  }
  else
  {
    console.log("false")
  }
}
compareNumber(4,16)