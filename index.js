function generateRandomNumber(min, max){
  return Math.floor(Math.random() * (max-min) + min);
}

function shaffle(ordered){
  let shuffled = [];
  for(var i=ordered.length; i>0; i--){
    let r =generateRandomNumber(0, i);
    shuffled.push(ordered.splice(r, 1)[0])
  }
  return shuffled;
}

module.exports = shaffle;
