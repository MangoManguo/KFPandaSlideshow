function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}
function randomDec(low, high) {
  return Math.random() * (high - low) + low;
}
function roundTo(num, numPlaces) {
  num = num * 10 ** numPlaces;
  num = Math.round(num);
  return num / 10 ** numPlaces;
}
