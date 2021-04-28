var lastposeofx; var lastposeofy; var color;
canvas=document.getElementById("msc"); var ctx=canvas.getContext("2d");
canvas.addEventListener("touchstart", begin);

function begin(e){console.log("touch begin event");
color=document.getElementById("color").value;
lastposeofx=e.touches[0].clientX-canvas.offsetLeft;
lastposeofy=e.touches[0].clientY-canvas.offsetTop;} 

canvas.addEventListener("touchmove", go);
function go(e){console.log("touch go event");
curposeofx=e.touches[0].clientX-canvas.offsetLeft;
curposeofy=e.touches[0].clientY-canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle=color;
ctx.moveTo(lastposeofx, lastposeofy);
console.log(lastposeofx, lastposeofy);
ctx.lineTo(curposeofx, curposeofy);
ctx.stroke();
lastposeofx=curposeofx; lastposeofy=curposeofy;}

function clearc(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);}