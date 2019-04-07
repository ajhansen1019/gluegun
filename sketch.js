var c;
 
function setup() {
 	createCanvas(600, 600);
 	c = color(0);
	cursor("https://static.cargocollective.com/images/up.png", [50], [50])
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
