//Battle of Even Or Odd:
//refer Question Image folder
function battleEvenOdd(N,A) {
    let oddSum=0;
    let evenSum=0;
    for(let i=0;i<N;i++)
    {
      if(A[i]%2)
      {
        oddSum+=A[i]
      }
      else
      {
        evenSum+=A[i]
      }
    }
    if(oddSum>evenSum)
    {
      console.log("Odd")
    }
    else
    {
      console.log("Even")
    }
  }
  battleEvenOdd(4,[1,2,3,4])
  