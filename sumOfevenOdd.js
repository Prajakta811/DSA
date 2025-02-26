//find sum of even numbers and odd numbers in an array
function sumOfevevOdd(arr)
{
  let n=arr.length;
  evenSum=0;
  oddSum=0;
  for(let i in arr)
  {
    if(arr[i]%2)
    {
      oddSum+=arr[i]
    }
    else
    {
      evenSum+=arr[i]
    }
  }
  console.log(oddSum,evenSum)
}
sumOfevevOdd([1,2,3,4])