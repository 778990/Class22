const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld;
var ball;

function setup() {

  createCanvas(800,600);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  var options = {
    isStatic:true
  }

  ground = Bodies.rectangle(width/2,height-20,width,20,options);
  World.add(myWorld,ground);

  var options = {
    restitution:2
  }

  ball1 = Bodies.circle(600,100,50,options);
  World.add(myWorld,ball1);

  ball = Bodies.rectangle(400,400,50,50);
  World.add(myWorld,ball);
  console.log(ball);
  console.log(ball.position.x);
  console.log(ball.position.y);


}

function draw() {
  background("yellow");  
  Engine.update(myEngine);
  fill("green");
  ellipseMode(RADIUS);
  ellipse(ball1.position.x,ball1.position.y,50,50)
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,800,20);
  fill("blue");
  rect(ball.position.x,ball.position.y,50,50);
  fill("purple");
  rect(100,400,20,40);
  drawSprites();
}