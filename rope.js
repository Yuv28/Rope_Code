class Rope{
	constructor(bodyA,pointB)
	{
		this.pointB = pointB;
		var options = {
			BodyA : body1,
			pointB = this.pointB,
			stiffness =1,
			length = 200
		}
	//create rope constraint here

	this.rope = Constraint.create(options);
	World.add(world,this.rope);

	}
    //create display() here 
	display(){
		var pointA = this.rope.bodyA.position;
		var pointB = this.pointB;
		strokeWeight(4);
		line(this.pointA.x,this.pointA.y,this.pointB.x,this.pointB.y);
	}
	}

