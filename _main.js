var c = document.getElementById("canvas"),
    ctx = c.getContext("2d"),
    h = c.height = $("body").height() - 20,
    w = c.width = $("body").width() - 20;

var ball = {};
var ball2 = {};

ball.x = 50;
ball.y = 50;
ball.r = 5;
ball.color = "red";
ball.speedX = 0;
ball.speedY = 0;
ball.upperHeight;
ball2.x = 900;
ball2.y = 50;
ball2.r = 5;
ball2.color = "blue";
ball2.speedX = 0;
ball2.speedY = 0;
ball2.upperHeight;

var gravity = 0.4,
    drag = 0.02;

(function animate() {
    ctx.clearRect(0, 0, w, h);

    for (var i = 0; i < 2; i++) {
        var b
        if (i == 0) {
            b = ball
        } else {
            b = ball2
        }
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, 2 * Math.PI, false);
        ctx.fillStyle = b.color;
        ctx.fill();
        ctx.closePath();

        if (b.speedY == 0) {
            b.upperHeight = b.y
        }

        if (b.y > h - 10 || b.y === h) {
            b.y = h - 10
            bounce(b);
        } else {
            b.speedY += gravity
            if (b.speedY < 0) {
                b.speedY -= drag
            } else {
                b.speedY += drag
            }
        }
        b.y += b.speedY;
    }
    requestAnimationFrame(animate);
}())

function bounce(b) {
    b.speedY = -(b.speedY / 2)
}
