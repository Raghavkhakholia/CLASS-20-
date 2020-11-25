var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(700,200, 30, 50);

  fixedRect.velocityX = 2;
  movingRect.velocityX = -2;

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";

  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
  fixedRect.x - movingRect.x <movingRect.width/2 + fixedRect.width/2 &&
  movingRect.y -fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
  fixedRect.y - movingRect.y <movingRect.height/2 + fixedRect.height/2){
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  fixedRect.velocityX = fixedRect.velocityX * (-1);
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityY = fixedRect.velocityY * (-1);
  movingRect.velocityY = movingRect.velocityY * (-1);
}
else{
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "blue";
}
  background(0);  
  drawSprites();
}