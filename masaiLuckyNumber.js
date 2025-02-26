//refer to QuestionImage

function luckyNumber(n){
    n=String(n)
    if(n.includes("7")||n.includes("4"))
    {
      console.log("Lucky")
    }
    else
    {
      console.log("Unlucky")
    }
  }
   luckyNumber(87)