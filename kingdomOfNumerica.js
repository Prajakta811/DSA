function kingdomOfNumerica(n){
    for(let i=0;i<=n;i++)
    {
      if(n%i==0)
      {
        process.stdout.write(i+" ")
      }
    }
    console.log()
  }
  kingdomOfNumerica(100)
  kingdomOfNumerica(23)