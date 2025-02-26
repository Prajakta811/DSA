//input:All-convoYs-9-be:Alert1.   4 
//Output: Epp-gsrzsCw-3-fi:Epivx5.

function encryptIt(S,K) {
    let encrypt="";
    for(let i=0;i<S.length;i++)
    {
      let char=S[i]
      if(char>="A" && char<="Z")
      {
        let rotated=String.fromCharCode((char.charCodeAt(0)-65+K)%26+65)
        encrypt+=rotated;
      }
      else if(char>="a" && char<="z")
      {
        let rotated=String.fromCharCode((char.charCodeAt(0)-97+K)%26+97)
        encrypt+=rotated;
      }
      else if(char>="0" && char<="9")
      {
        let rotated=String.fromCharCode((char.charCodeAt(0)-48+K)%10+48)
        encrypt+=rotated
      }
      else
      {
        encrypt+=char;
      }
    }
      console.log(encrypt)
    }
    encryptIt("All-convoYs-9-be:Alert1.",4)