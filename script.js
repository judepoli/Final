const ball = document.getElementById("ball");
let x = 0;
let y = 0;
let xSpeed = 0.5;
let ySpeed = 0.5;
let circleX;
let circleY;
let width = screen.width; 

function animate(){
	x += xSpeed;
	y += ySpeed;
	circleX = circleX + xSpeed;
	circleY = circleY +ySpeed;



	if (circleX == width){
	xSpeed = -xSpeed;

	}

 	if (circleY == window.innerHeight) {
	ySpeed = -ySpeed;

	}

    ball.style.left = x + "px";
    ball.style.top = y + "px";
    requestAnimationFrame(animate);
}
    animate();
