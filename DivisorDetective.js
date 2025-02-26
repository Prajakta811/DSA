//for QuestionHint refer to QuestionImages
function divisorDetective(n){
    let sum=0;
    for(let i=0;i<=n;i++)
    {
      if(12%i==0)
      {
        sum+=i;
      }
    }
    console.log(sum)
  }
  divisorDetective(12)