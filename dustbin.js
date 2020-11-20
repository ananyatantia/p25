class Bin
{
	constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		
		this.body=Bodies.rect(this.x, this.y, options)
		World.add(world, this.body);
		this.image = loadImage("dustbin.png");

	}
	display()
	{
			
			var binpos =this.body.position;		

			push()
			translate(binpos.x, binpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			pop()
			
	}

}