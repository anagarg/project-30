class Polygon {
    constructor(x,y,diameter){
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.circle(x,y,diameter);
    World.add(world,this.body);
  }
  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    pop();
  }
}