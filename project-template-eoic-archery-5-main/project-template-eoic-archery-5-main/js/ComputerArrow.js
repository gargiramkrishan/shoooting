class Arrow43
{
   constructor(x,y,width,height)
   {
     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height;

     var option=
     {
       isStatic : true,
       restitution : 0.75
     }
     this.trajectory = []
     this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,option)
     this.image = loadImage("assets/arrow.png")
     World.add(world,this.body)
   }
   shoot()
   {
     var velocity = p5.Vector.fromAngle(Archery3.angle + 2000)
     velocity.mult(20)
     Matter.Body.setStatic(this.body,false)
     Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
   }
   display()
   {
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle)
     image(this.image,0,0,this.width,this.height);
     pop();
   }
}