//refer to QuestionImage
function sumOfMultiples(a,b,k){
    let sum=0
     for(let i=a;i<=b;i++)
     {
       if(i%k==0)
       {
         sum+=i;
       }
     }
     console.log(sum)
   }
   sumOfMultiples(3,15,3)