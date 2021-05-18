class paper{
		
	constructor(x,y,r){
		this.image=loadImage("paper.png");
		
		var options = {
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2
			
		}
		
		this.r=r
		this.body=Bodies.circle(x,y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
		
			var paperpos=this.body.position;
			var angle= this.body.angle;			
			push()
			translate(paperpos.x, paperpos.y);
			rotate(angle);
			ellipseMode(CENTER);
			strokeWeight(4);
			stroke("white");
			fill("white");
			ellipse(0,0,this.r,this.r)
			imageMode(CENTER);
			//image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			image(this.image, 0,-10, this.r, this.r);
			paper.scale=1;
			pop();
	}

}