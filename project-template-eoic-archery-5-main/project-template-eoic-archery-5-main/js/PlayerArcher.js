class Archer
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
      if(keyIsDown(RIGHT_ARROW) && this.angle < 457.49999999999955)
      {
         this.angle += 0.5;
      }
      if(keyIsDown(LEFT_ARROW) && this.angle > 456.8800000000001)
      {
         this.angle -= 0.5;
      }
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      image(this.image,0,0,this.width,this.height);
      pop();
   }
}