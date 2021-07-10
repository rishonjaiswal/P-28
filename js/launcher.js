class Launcher {
    constructor(bodyA,pointB){
        var options= {
           bodyA:bodyA,
           pointB:pointB,
           stiffness: 0.004,
           length: 2,
        }
        this.body= Matter.Constraint.create(options)
        this.pointB= pointB
        World.add(world,this.body)
    }
    attach(b){
        this.body.bodyA=b
    }
    fly(){
      this.body.bodyA= null;
  }
    display(){
     if (this.body.bodyA){
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x,this.pointB.y)
     }
  }  
}