//to Cheked if basket contains mixed fruit or Single fruits

function checkBasket(N,B){
    let fruit=B[0]
    let count=0
   for(let i=1;i<N;i++)
   {
    if(fruit==B[i])
    {
      count++
    }
    else
    {
      count--
    }
   }
    if(count==N-1)
    {
      console.log("Single Type")
    }
    else
    {
      console.log("Mixed Basket")
    }
  }
   checkBasket(3,["banana","banana","banana"])