class Archer2
{
   constructor(x,y,width,height,angle)
   {
     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height;
     this.angle = angle;

     this.body = Bodies.rectangle(this.x,this.y,this.width,this.height)
     this.image = loadImage("assets/playerArcher.png")
   }
   display()
   {
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      image(this.image,0,0,this.width,this.height);
      pop();
   }
}