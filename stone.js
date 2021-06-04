class Stone{
	constructor(x,y,width,height){
	var options={
		'restitution':1.0,
		'friction':0.5,
		'density':12
	}
		this.body=Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
	}
	display()
	{
			var stonePos = this.body.position;
            var stoneAngle = this.body.angle;		
			push()
			translate(stonePos.x, stonePos.y);
            rotate(stoneAngle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("purple");
			rect(0,0,this.width,this.height);
			pop()
	}

}