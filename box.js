class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.6,
        'friction':0.9,
        'density':0.7
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255)
    rect(this.body.position.x, 0, this.width, this.height);
    pop();
  }
};
