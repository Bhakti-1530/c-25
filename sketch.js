const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paperObject;
var ground;
var bace, sprite;
function preload() {
  bace = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 500);
  sprite=createSprite(800,392,200,20);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	paperObject = new Paper(100,397,40);
	ground = new Ground(600,480,1200,20);
	sprite1 = new Dustbin(800,461,100,20);
	sprite2 = new Dustbin(854,421,20,100);
  sprite3 = new Dustbin(747,421,20,100);
  
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(220);
  Engine.update(engine);
  sprite.scale=0.5; 
  sprite.addImage(bace);
    paperObject.display();
    ground.display();
    sprite3.display();
    sprite2.display();
    sprite1.display();

    


  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
     Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:290,y:-290});
  }
}





