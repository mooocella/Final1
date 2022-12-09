
//makes background ombre
function cakeOmbre() {
  var grd = ctx.createLinearGradient(0, 300, 0, 200)
  grd.addColorStop(0, "#FFCBD2");
  grd.addColorStop(1, "white");
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 400, 400)
}

//draws cake
function cakeDraw() {
ctx.moveTo(40, 140);
ctx.lineTo(40,310);
ctx.arcTo(40, 320, 42, 320, 10);
ctx.lineTo(290, 260);
ctx.arcTo(300, 260, 300, 140, 10);
ctx.lineTo(300, 80);
ctx.bezierCurveTo(300, 100, 200, 130, 200, 110)
ctx.bezierCurveTo(200, 120, 100, 160, 100, 130)
ctx.bezierCurveTo(100, 140, 40, 160, 40, 140)
ctx.fillStyle = "#FFD6B2";
ctx.fill()
ctx.lineTo(160, 70);
ctx.bezierCurveTo(160, 65, 300, 59, 300, 80);
ctx.moveTo(300, 80);
ctx.lineTo(40, 140)
ctx.moveTo(40, 260);
ctx.lineTo(300, 200);
ctx.moveTo(40, 200);
ctx.lineTo(300, 140);
ctx.stroke();
ctx.beginPath();
ctx.rect(185, 30, 15, 60);
ctx.fillStyle = "#A1FFF3";
ctx.fill();
}

//draws candle
function candleDraw() {
ctx.beginPath();
ctx.rect(185, 30, 15, 60);
}
  
  let fireHeight = 0;
  
//draws fire
  function fireDraw() {
    // Clear the canvas before drawing the fire
    ctx.clearRect(0, 0, 400, 400);
    cakeOmbre()
    cakeDraw()
    candleDraw()

    // Calculate the current position of the fire based on the current time
    const time = new Date().getTime();
    fireHeight1 = -10 - (Math.cos(time / 200 ) + 1.5) * 7;
    fireHeight2 = -10 - (Math.cos(time / 170 ) + 1.5) * 7;
    fireHeight3 = -10 - (Math.cos(time/ 180 ) + 1.5) * 7;
    
    // Draw the fire at the updated position
    //Red Fire
    ctx.beginPath();
    ctx.roundRect(185, 35, 5, fireHeight1 + 4, 5);
    ctx.fillStyle = "#B22222";
    ctx.fill();

    ctx.beginPath();
    ctx.roundRect(190, 35, 5, fireHeight2, 5);
    ctx.fillStyle = "#B22222";
    ctx.fill();

    ctx.beginPath();
    ctx.roundRect(195, 35, 5, fireHeight3 + 6, 5);
    ctx.fillStyle = "#B22222";
    ctx.fill();

    //Orange Fire
    ctx.beginPath();
    ctx.roundRect(185, 35, 5, fireHeight2 + 12, 5);
    ctx.fillStyle = "Orange";
    ctx.fill();

    ctx.beginPath();
    ctx.roundRect(190, 35, 5, fireHeight3 + 4, 5);
    ctx.fillStyle = "Orange";
    ctx.fill();

    ctx.beginPath();
    ctx.roundRect(195, 35, 5, fireHeight1 + 10, 5);
    ctx.fillStyle = "Orange";
    ctx.fill();

    //Yellow Fire
    ctx.beginPath();
    ctx.roundRect(186, 35, 4, fireHeight2 + 14, 5);
    ctx.fillStyle = "Gold";
    ctx.fill();

    ctx.beginPath();
    ctx.roundRect(190, 35, 4, fireHeight3 + 10, 5);
    ctx.fillStyle = "Gold";
    ctx.fill();

    ctx.beginPath();
    ctx.roundRect(194, 35, 4, fireHeight1 + 12, 5);
    ctx.fillStyle = "Gold";
    ctx.fill();

     //White Fire
     ctx.beginPath();
     ctx.roundRect(186, 35, 3, fireHeight2 + 15, 5);
     ctx.fillStyle = "#FAFAD2";
     ctx.fill();
 
     ctx.beginPath();
     ctx.roundRect(189, 35, 3, fireHeight3 + 11, 5);
     ctx.fillStyle = "#FAFAD2";
     ctx.fill();
 
     ctx.beginPath();
     ctx.roundRect(192, 35, 3, fireHeight1 + 13, 5);
     ctx.fillStyle = "#FAFAD2";
     ctx.fill();

     ctx.beginPath();
     ctx.roundRect(195, 35, 3, fireHeight2 + 16, 5);
     ctx.fillStyle = "#FAFAD2";
     ctx.fill();
  }

  setInterval(fireDraw, 1000 / 60);
