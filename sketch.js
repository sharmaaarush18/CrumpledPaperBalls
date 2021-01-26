
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,dustbin_img,db;

function preload()
{
	dustbin_img = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	db = createSprite(700,590);
	db.addImage(dustbin_img);
	db.scale = 0.5;
	//Create the Bodies Here.
	ground1 = new Ground(400,680,800,20);
	ball = new Paper(100,500,50);
	bin1 = new Dustbin(700,660,150,20);
	bin2 = new Dustbin(630,590,20,160);
	bin3 = new Dustbin(770,590,20,160)
	

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground1.display();
  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
 
  

}
function keyPressed(){
	if (keyCode === 32){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:300,y:-580});
	}
}

