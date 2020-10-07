var  mrect,frect


function setup() {
  createCanvas(800,400);
  mrect=createSprite(400, 200, 80, 30);
  frect=createSprite(200,200,30,80)
  frect.shapeColor="Blue"
  mrect.shapeColor="Blue"
}

function draw() {
  background(0);
  
 if(keyDown("Up")){
  mrect.velocityY=4

 }
 if(keyDown("Down")){
  mrect.velocityY=-4

 }

 if(keyDown("Left")){
  mrect.velocityX=-4

 }

 if(keyDown("Right")){
  mrect.velocityX=4

 }
  if(mrect.x-frect.x<mrect.width/2+frect.width/2 &&
    frect.x-mrect.x<mrect.width/2+frect.width/2 ){
    mrect.velocityX=mrect.velocityX*(-1)
    frect.velocityX=frect.velocityX*(-1)

  }
  if(mrect.y-frect.y<mrect.height/2+frect.height/2 &&
    frect.y-mrect.y<mrect.height/2+frect.height/2 ){
      mrect.velocityY=mrect.velocityY*(-1)
      frect.velocityY=frect.velocityY*(-1)
    
    }
  drawSprites();
}