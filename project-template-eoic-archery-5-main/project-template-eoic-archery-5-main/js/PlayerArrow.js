class Arrow 
{
   constructor(x,y,width,height,angle)
   {
     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height;

     var option=
     {
       isStatic : true,
       restitution : 0.85
     }
     this.trajectory = []
     this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,option)
     this.image = loadImage("assets/arrow.png")
     World.add(world,this.body)
   }
   shoot()
   {
     var velocity = p5.Vector.fromAngle(Archery.angle)
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
     rotate(angle);
     image(this.image,0,0,this.width,this.height);
     pop();

     if(this.body.velocity.x > 0 && this.body.position.x > 300)
     {
       var position = [this.body.position.x,this.body.position.y];
       this.trajectory.push(position);
     }

     for(var i = 0; i < this.trajectory.length; i++)
     {
       image(this.image,this.trajectory[i][0],this.trajectory[i][1], 12,19)
     }
   }
}