function fun(o,run){
    // write code here
    let viratrun=0;
    let Abrun=0;
    let abStrike=true;
    for(let i=0;i<run.length;i++)
    {
      runs=run[i]
      if(abStrike)
      {
        Abrun+=runs
      }
      else
      {
        viratrun+=runs;
      }
      if(runs==1 ||runs==3)
      {
        abStrike=!abStrike;
      }
      if(i+1%6==0)
      {
        abStrike=!abStrike;
      }
    }
    if(Abrun>viratrun)
    {
      console.log("Ab")
    }
    else if(viratrun>Abrun)
    {
      console.log("v")
    }
    else if (Abrun==viratrun)
    {
      console.log("t")
    }
}
fun(3,[0,0,0,0,0,1,0,0,0,0,1,1,6,6,6,1,4,4])