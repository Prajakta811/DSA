//Need to find all the prime numbers between l and r 
function primeNumbers(l,r){
  
    NextPrime:for(let i=l;i<=r;i++)
    {
     for(j=2;j<i;j++)
     {
       if(i%j==0)
       {
         continue NextPrime
       }
     }
     console.log(i)
    }
  }
  
  primeNumbers(2,5)