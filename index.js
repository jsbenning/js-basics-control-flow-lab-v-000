// Write your code in this file!
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance >= 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    return "No can do.";
  } else {
    return "Here we go!";
  }
}

function ternaryCheckCity(city) {
  return (city === "NYC" ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case ("Generous"): 
      resp = "Thank you so much.";
      break;
    case ("Not as generous"): 
      resp = "Thank you."
      break;
    default:
      resp = "Bye";
      break;
  }  
}