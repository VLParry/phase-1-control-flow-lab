function scuberGreetingForFeet(feetTraveled) {
  if (feetTraveled <= 400) {
    return 'This one is on me!';
  } else if (feetTraveled <= 2000) {
    return 'That will be twenty bucks.';
  } else if (feetTraveled <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}


function ternaryCheckCity(cityName) {
  return cityName === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}