var c;
 
function setup() {
 	createCanvas(windowWidth, windowHeight);
 	c = color(255,255,255);
	cursor('grab', [50], [50])
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
