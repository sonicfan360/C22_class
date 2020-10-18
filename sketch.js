const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object;
var ground
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options_obj=
  {
    restitution: 1
  }

  object = Bodies.circle(200,100,20,options_obj);
  console.log(object);
  World.add(world,object);

  var options={
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,width,10,options)
  World.add(world,ground)
}

function draw() {
  background(220,255,255);  
  Engine.update(engine);
  
  ellipseMode(RADIUS);
   circle(object.position.x,object.position.y,20);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,width,10);
}