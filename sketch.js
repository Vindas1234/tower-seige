const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var a;
//var circles=[];
function setup() {
  createCanvas(800,800);
  stroke(255)
  
  //level 2
  box1 = new block(330,235,30,40);
  box2 = new block(360,235,30,40);
  box3 = new block(390,235,30,40);
  box4 = new block(420,235,30,40);


 camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  //a=height;
  //circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  //a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  //for (i=0;i<circles.length;i++)
{
	//circle(circles[i], height/2,20)
}
//if(camera.position.x%width===0)
{
	//circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 