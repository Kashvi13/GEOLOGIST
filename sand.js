class Sand{
	constructor(x,y,r){
	// assign options to the rubber ball 
	var options={
		restitution:0.8,
		friction:0.3,
		density:30
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-30)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var sandPos=this.body.position;		
			push()
			translate(sandPos.x, sandPos.y);
			rectMode(CENTER)
			strokeWeight(3);
			stroke("black");
			fill("brown");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r,this.r);
			pop()
	}

}