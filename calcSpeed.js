// You are given two numbers representing distance and time. You need to calculate the speed using the formula
// speed = distance/time and determine whether to apply brakes or keep going based on the speed.
// Print "Apply Brake" if the speed is greater than 40, otherwise print "Keep Going".
function calcSpeed(distance,time)
{
  let speed=distance/time;
  let action=(speed>40)?"Apply Brake":"Keep Going"
  console.log(action)
}
 calcSpeed(100,2)