// 위도 : - 90 ~ 90, 경도 : - 180 ~ 180

function Deg2Rad(deg) {
  return (deg * Math.PI) / 180;
}

function PythagorasEquirectangular(pArray) {
  pArray[0] = Deg2Rad(pArray[0]);
  pArray[2] = Deg2Rad(pArray[2]);
  pArray[1] = Deg2Rad(pArray[1]);
  pArray[3] = Deg2Rad(pArray[3]);
  var R = 6371; // km
  var x = (pArray[3] - pArray[1]) * Math.cos((pArray[0] + pArray[2]) / 2);
  var y = pArray[2] - pArray[0];
  var d = Math.sqrt(x * x + y * y) * R;
  return d;
}

module.exports.PythagorasEquirectangular = PythagorasEquirectangular;
