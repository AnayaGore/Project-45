var Jake, JakeImg;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{ JakeImg=loadImage("player.png");
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Jake=createSprite(20,20,20,20);
	Jake.addImage(JakeImg);
	Jake.scale=0.05;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if(keyWentDown("UP_ARROW")){
	  Jake.y=Jake.y-10;
  }

  if(keyWentDown("DOWN_ARROW")){
	Jake.y=Jake.y+10;
}

if(keyWentDown("RIGHT_ARROW")){
	Jake.x=Jake.x+10;
}

if(keyWentDown("LEFT_ARROW")){
	Jake.x=Jake.x-10;
}
  
  drawSprites();
 
}



