//Print minimum and maximum number in an Array in two different line:
function SmallestandLargestofall(N, A) {
    let min=Infinity;
    let max=-Infinity
    for(let i=0;i<N;i++)
    {
      if(A[i]>max)
      {
        max=A[i]
      }
      if(A[i]<min)
      {
        min=A[i]
      }
    }
    console.log(min)
    console.log(max)
  }
  
  SmallestandLargestofall(4,[-2,0,8,4])