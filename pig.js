class Pig {
constructor( x, y){
var options = {
    'restitution':0.6,
    'friction':0.9,
    'density':1.0
}
this.body = Bodies.rectangle(x, y, 80, 80, options);
this.width = 80;
this.height = 80;


World.add(world, this.body);

} //constructor()
display(){
    var post =this.body.position
    var angle = this.body.angle;
    push();
    translate(post.x, post.y);
    rotate(angle);
    rectMode(CENTER)
    fill("green")
rect(post.x,post.y,this.width,this.height ) ;
//fill("green")
pop();

}//display()
}  //class Pig