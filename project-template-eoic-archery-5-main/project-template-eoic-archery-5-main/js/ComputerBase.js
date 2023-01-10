class PlayerBase2
{
  constructor(x,y,width,height)
  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.image = loadImage("assets/base2.png")
    this.body = Bodies.rectangle(this.x,this.y,this.width,this.height)
  }
  display()
  {
     image(this.image,this.x,this.y,this.width,this.height)
  }
}