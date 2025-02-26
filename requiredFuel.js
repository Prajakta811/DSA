// You are given two numbers, stored in variables with the names fuel and distance.

// You must calculate the value of required, determined by the product of fuel and distance.

// If required is greater than 50, the output should indicate that you have enough fuel,

// otherwise, you should continue the journey.

function requiredFuel(fuel,distance)
{
  let required=fuel*distance;
  if(required>50)
  {
    console.log("Enough Fuel")
  }
  else
  {
    console.log("Go On")
  }
}
requiredFuel(1,46)