

function stringValue(S) {
    let sum=0;
    for(let i=0;i<S.length;i++)
    { 
     let char=S[i]
     let str=((char.charCodeAt(0)-97)%(26+97))+1
    sum+=str
    }
    console.log(sum)
    }
    stringValue("aba")
    
    // Second Approch
    
    function stringValue(S) {
      //write code here
      let sum=0;
      for(let i=0;i<S.length;i++)
      {
        sum+=S.charCodeAt(i)-'a'.charCodeAt(0)+1;
      }
       console.log(sum);
    }
    