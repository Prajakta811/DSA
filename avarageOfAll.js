//Avarage Value of ceil Number 
function averageOfAll(n, arr){
    let sum=0;
    let avg;
    for(let i=0;i<n;i++)
    {
      sum+=arr[i]
    }
    avg=Math.ceil(sum/n)
    console.log(avg)
  }
  averageOfAll(4,[2,5,0,9])
  