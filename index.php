<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>
		<style>
		html, body {
height: 100%;
width: 100%;
margin: 0;
}
		</style>
		<canvas id="canvas">

</canvas>
<script>
//variables for nearly everything
var c = document.getElementById("canvas"),
	ctx = c.getContext("2d"),
	h = c.height = (Math.floor($("html").height() / 10) * 10) - 5,
	w = c.width = (Math.floor($("html").width() / 10) * 10) - 5,
	user = new users(50,50,5,5);

//animate everything!!
(function animate() {
ctx.clearRect(0,0,w,h)
//////////////
ctx.beginPath()
ctx.strokeStyle = "grey"
for(var i = 0; i < h; i += 5){
	ctx.moveTo(0 , i)
	ctx.lineTo(w, i)
}
for(var i = 0; i < w; i += 5){
	ctx.moveTo(i , 0)
	ctx.lineTo(i, h)
}
ctx.stroke()
ctx.closePath()
//////////////
var a = user
ctx.beginPath()
ctx.rect(a.x,a.y,a.we,a.he)
ctx.strokeStyle = "blue"
ctx.stroke()
ctx.closePath()
//////////////
requestAnimationFrame(animate)
}())

// define user
function users(x, y, he, we) {
this.x = x;
this.y = y;
this.we = we;
this.he = he;
this.move = function() {

}
}
</script>
	</body>
</html>
