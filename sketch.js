const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ropes;
var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
	ball1 = Bodies.circle(320,400,20);
	ball2 = Bodies.circle(360,400,20);
	ball3 = Bodies.circle(400,400,20);
	ball4 = Bodies.circle(440,400,20);
	ball5 = Bodies.circle(480,400,20);
	rope1 = new Rope(ball1.body,{x:200,y:350});
	rope2 = new Rope(ball2.body,{x:250,y:350});
	rope3 = new Rope(ball3.body,{x:300,y:350});
	rope4 = new Rope(ball4.body,{x:350,y:350});
	rope5 = new Rope(ball5.body,{x:400,y:350});
	Engine.run(engine);

  
}

function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  //create ellipse shape for multiple bobs here
	ellipse(ball1.position.x,ball1.position.y,20);
	ellipse(ball2.position.x,ball2.position.y,20);
	ellipse(ball3.position.x,ball3.position.y,20);
	ellipse(ball4.position.x,ball4.position.y,20);
	ellipse(ball5.position.x,ball5.position.y,20);
	
	if(keyIsDown(LEFT_ARROW)) {
		keyPressed();
	}

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	Matter.Body.applyForce(ball1,{x:0,y:0},{x:-0.05,y:0});
}