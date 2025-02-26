//Refer To Question Images for Question:
//
function totalBill(N) {
    let total=80;
    
    if(N>=0 && N<51)
    {
      total+=(N*3)
      N=0
    }
    else if(N>51)
    {
      total+=(50*3)
      N=N-50
    }
     
   if(N>=51 && N<=100)
    {
      total+=(N*5)
      N=0
    }
    else if(N>100)
    {
      total+=(100*5)
      N=N-100
    }
    else if(N>0 && N<51)
    {
       total+=(N*5)
      N=0
    }
   
   if(N>0 && N<100)
   {
     total+=(N*10)
     N=0
   }
   else if(N>100)
   {
     total+=(N*10)
   }
   console.log(total)
  }
  totalBill(5)