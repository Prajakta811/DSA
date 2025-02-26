//refer to Question image
function findMostDominantDigit(n) {
    n=String(n)
    let max=-Infinity
    for(let i=0;i<n.length;i++)
    {
      if(n[i]>max)
      {
        max=n[i]
      }
    }
    console.log(max)
  }
  findMostDominantDigit(1000)//in 1000 =>1 is dominant.