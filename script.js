drawn = () => {
  var canvas = document.getElementById('canvas');
  var m = document.getElementById('multiplier').value;
  var p = document.getElementById('modulus').value * 10;
  var x = canvas.width / 2;
  var y = canvas.height / 2 - 30;
  var numbers = 0;
  var cos, sin;
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    ctx.clearRect(10, 10, canvas.width, canvas.height);
    for (var i = 0; i < p; i++) {
      if (i % 10 == 0) {
        cos = x + (Math.cos(2 * Math.PI * i/p) * y);
        sin = x + (Math.sin(2 * Math.PI * i/p) * y);
        ctx.beginPath()
        ctx.arc(cos, sin, 2, 0, Math.PI * 2, true);
        ctx.fillText(numbers++, cos, sin);
        ctx.lineTo(x + Math.cos(2 * Math.PI * i * m/p) * y, x + Math.sin(2 * Math.PI * i * m/p) * y);
        ctx.stroke(); 
      }
    }
  }
}