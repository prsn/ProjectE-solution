function sumInAP(firstTerm, maxValue, diff) {
  var nTerm = Math.floor( (maxValue - 1) / diff);
  var lastTerm = firstTerm + (nTerm - 1) * diff;
  var sum = (nTerm * (firstTerm + lastTerm)) / 2.0;
  return sum;
}
var s3 = sumInAP(3,1000,3);
var s5 = sumInAP(5,1000,5);
var s15 = sumInAP(15,1000,15);

console.log((s3 + s5 - s15));
