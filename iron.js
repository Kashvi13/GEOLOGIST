class Iron{
	constructor(x,y,width,height){
	var options={
		'restitution':0.9,
		'friction':0.5,
		'density':20
	}
		this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
	}
	display()
	{
			var ironPos = this.body.position;
            var ironAngle = this.body.angle;		
			push()
			translate(ironPos.x, ironPos.y);
            rotate(ironAngle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("green");
			rect(0,0,this.width,this.height);
			pop()
	}

}