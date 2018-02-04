// Code your solution in this file!
function calculateVertical(start, destination) {
  let vertical_dist;
  vertical_dist = (start - destination) * 264;
  return vertical_dist;
}

function distanceFromHqInBlocks(start) {
  let blocks;
  blocks = 42 - start;
  if (blocks < 1) {
    blocks = blocks * -1;
    return blocks;
  } else {
    return blocks;
  }
}

function distanceFromHqInFeet(num) {
  let blocks;
  blocks = distanceFromHqInBlocks(num);
  let feet;
  feet = blocks * 264;
  return feet;
}

function distanceTravelledInFeet(num1, num2) {
  feet = calculateVertical(num1, num2);
  return feet;
}
