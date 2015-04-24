var test = function(mph) {
  var feetPerMile, distanceHome, feetPerHour, feetPerSecond;
  feetPerMile = 5280;
  //90 Ft to first base. 90ft to second base.  This makes an isosceles triangle.
  //The mound is halfway between home and second, there for the distance home should
  //be half the square root of 90^2 + 90^2


  distanceHome = 60.4 //Math.pow((90*90)+(90*90),0.5)/2; Apparently it is less than Math

  //Grab the speed entered, multiply times feet per mile.
  feetPerHour = parseInt(mph)*feetPerMile;
  //Get the amount of feed it travels in a second
  feetPerSecond = feetPerHour / 60 / 60;
  //Return the time it takes to travel from the mound to homeplate.
  return distanceHome / feetPerSecond
};

window.onload = function()
{
  var elem = document.getElementById('button');
  elem.addEventListener('click', function(){
    document.getElementById('result').innerHTML = test(parseInt(document.getElementById("speed").value)) + " seconds";
  })
}

