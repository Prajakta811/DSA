//Nice Array
function niceArray(N, array, K) {
    for(let i=0;i<N;i++)
    {
      if(array[i]%2==0)
      {
        if(array[i]>K)
        {
          console.log("Nice Array" )
          return
        }
        else
        {
          console.log("Bad Array")
          return
        }
      }
    }
      
    }
    niceArray(5,[1,2,3,4,5],2)
    