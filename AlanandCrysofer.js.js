function alanChristopher(S){
    let message=[]
    for(let i=0;i<S.length;i++)
    {
      if(S[i]=="#")
      {
        if(message>0)
        {
          message.pop
        }
        
      }else
      {
        message.push(S[i])
      }
    }
    console.log(message.join(""))
    }
     alanChristopher("ab#d")