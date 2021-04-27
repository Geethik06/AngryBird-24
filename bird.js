class Bird{

constructor(x,y){
    var options ={ restitution:0.8,
        friction:0.06 ,
        density:1.0
                    }
this.body = Bodies.rectangle(x,y,75,75,options)


World.add(world, this.body);

}
display(){
var post = this.body.position
post.x = mouseX
post.y = mouseY
fill("red")
rect(post.x,post.y,75,75)
}


}