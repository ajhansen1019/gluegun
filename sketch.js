var c;
 
function setup() {
 	createCanvas(600, 600);
 	c = color(0);
}
 
function draw()
{
	// display instructions
	noStroke();
	fill(200);
	rect(0, 0, width, 25);
	fill(0);
	text("Press the 'R' key on your keyboard to change the color", 10, 15);
}
 
function mouseDragged() 
{ 
	strokeWeight(10);
	stroke(c);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
 
function keyPressed()
{
	if(key == 'r' || key == 'R')
	{
		c = color(255, 0, 0);
	}
}
