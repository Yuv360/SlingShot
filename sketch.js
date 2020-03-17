const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var shooter,slingShot;
var backgroundImg
var gameState = "onSling"



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20)
  shooter = new Shooter(200,50);
  slingShot = new SlingShot(shooter.body,{x:200,y:50});


  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0);  
 
shooter.display();
slingShot.display();
}
function mouseDragged(){
  if(gameState === "onSling"){
Matter.Body.setPosition(shooter.body,{x : mouseX,y : mouseY })
}
}
function mouseReleased(){
  slingShot.fly();
  gameState = "launched"
}
function keyPressed(){
  if(keyCode === 32){
    
  }
}