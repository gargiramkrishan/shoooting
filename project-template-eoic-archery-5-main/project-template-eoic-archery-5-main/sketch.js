const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var Arrows = []
var CompArrow = []
var angle,player,Archery,Arrow1,base;
var angle,player2,Archery3,arrrow,base2; 
var backgroundImg;

function preload()
{
  backgroundImg =  loadImage("assets/background.gif")
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angle = 457;
  angle2 = 900;
  player = new Player(200,200,200,300);
  Archery = new Archer(300,400,200,300,angle)
  player2 = new Player2(1200,200,200,300);
  Archery3 = new Archer2(1300,200,200,300,angle2)
  base = new PlayerBase(100,410,400,500)
  base2 = new PlayerBase2(1090,420,400,500)

  computerArchering()
}

function draw() {
  background(189);
  image(backgroundImg,0,0,6000,1000)
  for(var i = 0; i < Arrows.length; i++)
  {
      Shoot1(Arrows[i],i)
  }

  for(var i = 0; i < CompArrow.length; i++)
  {
      Shoot2(CompArrow[i],i)

  }
  player.display();
  player2.display();
  base.display();
  base2.display()

  Archery.display();
  Archery3.display()
  Engine.update(engine);
}

function keyPressed()
{
  if(keyCode == '32')
  {
    Arrow1 = new Arrow(Archery.x + 70,Archery.y - 200,200,100)
    Arrows.push(Arrow1)
  } 
}

function keyReleased()
{
  if(keyCode == '32')
  {
     Arrows[Arrows.length - 1].shoot();
  }
}


function Shoot1(arroe,index)
{
   arroe.display();
   if (arroe.body.position.x >= width || arroe.body.position.y >= height - 190) {
    Matter.World.remove(world, arroe.body);
    Arrows.splice(index, 1);
  }
}


function Shoot2(arroe2,index1)
{
   arroe2.display();
   if (arroe2.body.position.x >= width || arroe2.body.position.y >= height - 190) {
    Matter.World.remove(world, arroe2.body);
    CompArrow.splice(index1, 1);
  }
}

function computerArchering()
{
  if(!Archery3.collapse && !Archery.collapse)
  {
    setTimeout(() => {

      var pos = Archery3.body.position;
      var arrrow = new Arrow43(pos.x - 40 , pos.y, 100, 10, angle2) ;

      Matter.Body.setAngle(Archery3.body, angle2);
      Matter.Body.setAngle(Archery3.body, angle2);

      CompArrow.push(arrrow);

      setTimeout(() => {
        CompArrow[CompArrow.length - 1].shoot(angle2);
      }, 100);

      computerArchering();
    },2000);
     }
}
