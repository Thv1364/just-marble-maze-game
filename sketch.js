function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandom(min, max) {
  return ((Math.random() * (max - min)) + min);
}

function setup() {
  createCanvas(1200, 700);
}

let spd=getRandom(0.3, 2)
if (getRandomInt(0, 17)==13)
{
  spd=Math.pow(spd,5);
}


console.log(spd)
let marblex=50;
let marbley=50;
function draw() {
 // background(getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255));
  background(25, 25, 254);
  
  fill(255,100,100);
  stroke(255);
  rect(100,100,50,50);
  
  fill(getRandomInt(0, 255),getRandomInt(0, 255),getRandomInt(0, 255));
  noStroke();
  
  ellipse(getRandomInt(marblex-10, marblex+10),getRandomInt(marbley-10, marbley+10),getRandomInt(1, 60),getRandomInt(1, 60));
  
  fill(getRandomInt(0, 255),getRandomInt(0, 255),getRandomInt(0, 255));
  noStroke();
  ellipse(getRandomInt(marblex-10, marblex+10),getRandomInt(marbley-10, marbley+10),getRandomInt(1, 60),getRandomInt(1, 60));
  
  
  
  
  
  if (keyIsDown(LEFT_ARROW))
  {
    marblex += spd*getRandomInt(-10, 5);
    marbley += spd*getRandomInt(-5, 5);
  }
  
  if (keyIsDown(RIGHT_ARROW))
  {
    marblex += spd*getRandomInt(-5, 10);
    marbley += spd*getRandomInt(-5, 5);
  }
  
    if (keyIsDown(DOWN_ARROW))
  {
    marbley += spd*getRandomInt(-5, 10);
    marblex += spd*getRandomInt(-5, 5);
  }
  
  if (keyIsDown(UP_ARROW))
  {
    marbley += spd*getRandomInt(-10, 5);
    marblex += spd*getRandomInt(-5, 5);
  }
  
  fill(0,0,255);
  let wall1 =rect(200,0,30,400);
  let wall2 =rect(400,200,30,400);
  
  fill(0,255,0);
  let goal =rect(1150,650,50,50);
  
  
  let hitWall1=collideRectCircle(200,0,30,400, marblex, marbley, 20);
  if (hitWall1)
  {
   marblex=50;
  marbley=50;
  }
  
  let hitWall2=collideRectCircle(400,200,30,400, marblex, marbley, 20);
  if (hitWall2)
  {
   marblex=50;
  marbley=50;
  }
  
  let hitend=collideRectCircle(1150,650,50,50, marblex, marbley, 20);
  //if (marbley>=750 && marbley<=800 && marblex>=1150 && marblex<=1200)
  if (hitend)
  {
    console.log("text");
    fill(255,0,0);
    textSize(100);
   text("yay! you did it!",400,100);
  }
  
// function keyPressed() {
//   if (keyCode === LEFT_ARROW) {
    
//   } 
//   if (keyCode === RIGHT_ARROW) {
//     marblex += 1;
//   }
//   else
//   {
    
//   }
}
