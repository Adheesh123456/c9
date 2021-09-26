var garry;
function setup() {
  createCanvas(400,400);
garry=createSprite(200,200,30,30)


  
}

function draw() 
{
  background(30);
if (keyIsDown(RIGHT_ARROW)){
  garry.position.x=garry.position.x+5
}
if (keyIsDown(LEFT_ARROW)){
  garry.position.x=garry.position.x-5

}


  


drawSprites();

}




