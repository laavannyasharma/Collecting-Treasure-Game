var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondG,jwelleryG,swordGroup;
var PLAY = 1;
var END = 0;
var gameState = 1;
function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(600,600);
// Moving background
  path = createSprite(300,300);
  path.addImage(pathImg);
  path.velocityY = +3;
boy = createSprite(70,500,10,10);
  boy.addAnimation("running",boyImg);
  boy.scale=0.08;
  cashG = new Group();
  diamondG = new Group();
  jwelleryG = new Group();
  swordGroup = new Group();

}

function draw() {
if(gameState===PLAY){
   background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y>400){
    path.y = height/2;
  }
createCash();
  createDiamonds();
  createSword();
  createJwellery();
  if(cashG.isTouching(boy)){
    cashG.destroyEach();
    treasureCollection = treasureCollection+50;
  }
  else  if(diamondG.isTouching(boy)){
    diamondG.destroyEach();
    treasureCollection = treasureCollection+50;
  }
  else if(jwelleryG.isTouching(boy)){
    jwelleryG.destroyEach();
    treasureCollection = treasureCollection+50;
  }
  else {
    if(swordGroup.isTouching(boy)){
      gameState = END;
      boy.addAnimation("running",endImg);
      boy.x = 300;
      boy.y=300;
      boy.scale = 0.9;
     cashG.destroyEach();
      diamondG.destroyEach();
      jwelleryG.destroyEach();
      swordGroup.destroyEach();
     cashG.setVelocityYEach(0);
      diamondG.setVelocityYEach(0);
      jwelleryG.setVelocityYEach(0);
      swordGroup.setVelocityEach(0);
    }
  }
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,300,30);
}
 

}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 300;
  diamondG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}