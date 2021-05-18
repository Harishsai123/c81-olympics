canvas = document.getElementById("Canvass");
ctx = canvas.getContext("2d");
color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
canvas = document.getElementById("Canvass");
ctx = canvas.getContext("2d");
color = "black";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(300, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
canvas = document.getElementById("Canvass");
ctx = canvas.getContext("2d");
color = "yellow";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(400, 200, 40, 0, 2 * Math.PI);
ctx.stroke();
canvas = document.getElementById("Canvass");
ctx = canvas.getContext("2d");
color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(250, 225, 40, 0, 2 * Math.PI);
ctx.stroke();
canvas = document.getElementById("Canvass");
ctx = canvas.getContext("2d");
color = "green";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(350, 225, 40, 0, 2 * Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    console.log(color);
    mouseX = e.clientX - canvas.offsetLeft;
    mouseY = e.clientY - canvas.offsetTop;
    console.log("x = " + mouseX + " y = " + mouseY);
    circle(mouseX,mouseY);
}

function circle(mouseX,mouseY) {
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouseX,mouseY, 40, 0, 2 * Math.PI);
ctx.stroke(); 
}

function clear_area() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}