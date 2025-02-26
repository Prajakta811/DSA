// You are provided with the dimensions of two rectangles. For the first rectangle, you have lengths L1 and B1, and 
// for the second rectangle, you have lengths L2 and B2. You need to determine if the area of the first rectangle is
// greater than the second, and if the perimeter of the first rectangle is greater than the second.

function areaPerimeterOfRect(L1,B1,L2,B2)
{
let area1=(L1*B1)
let perimeterofRect1=2*(L1+B1)
let area2=(L2*B2)
let perimeterofRect2=2*(L2+B2)
if(area1>area2)
{
  console.log("true")
}
else
{
  console.log(false)
}
if(perimeterofRect1>perimeterofRect2)
{
  console.log(true)
}
else
{
  console.log(false)
}

}
areaPerimeterOfRect(1,2,2,3)