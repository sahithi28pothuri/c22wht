const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, body;
var backgroundImg;
var star, starImg, starSprite;
var fairy, fairyImg, fairySprite;
var ground, groundSprite;

function preload(){
  backgroundImg = loadImage("images/starnight.png");
  starImg = loadImage("images/star.png");
  fairyImg = loadAnimation("images/fairy1.png","images/fairy2.png");
   
}

function setup() {
  createCanvas(800, 750);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }
  
  var options = {
    isStatic: true
  }

  star = Bodies.rectangle(600,50,10,10,options);
  World.add(world,star);
  
   
  starSprite = createSprite(600,50,10,10);
  starSprite.addImage("star",starImg);
  starSprite.scale = 0.3;

  var options = {
    isStatic: true
  }

  fairy = Bodies.rectangle(100,530,20,70,options);
  World.add(world,fairy);

  fairySprite = createSprite(100,530,20,70);
  fairySprite.addAnimation("fairy",fairyImg);
  fairySprite.scale = 0.3;

}


function draw() {
  background(backgroundImg);
 
  Engine.run(engine);

  if(star.position.y>150){
    star.position.y = 480;
    Matter.Body.setStatic(star,true);
  }

  starSprite.x = star.position.x;
  starSprite.y = star.position.y;
  
  fairySprite.x = fairy.position.x;
  fairySprite.y = fairy.position.y;

  drawSprites();

}

function keyPressed(){

  if(keyCode === DOWN_ARROW){
    Matter.Body.setStatic(star,false);
  }

  if(keyCode === RIGHT_ARROW){
    fairy.position.x += 15;
  }

  if(keyCode === LEFT_ARROW){
    fairy.position.x -= 15;
  }

}