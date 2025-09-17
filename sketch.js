function setup() 
{
createCanvas(600,400);
background(220);
}
function draw()
{
    //game loop
fill(255,0,0);
ellipse(50, 50,20,20);

//display game title
fill(0);
textSize(24);
textAlign(CENTER);
text("Marble Maze - Coming Soon!", width/2, height/2);

}
