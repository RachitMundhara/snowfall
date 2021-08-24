class Snow{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':0.02
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }

      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
       // rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
      }
}

/*var student = ["Rachit", "Grade 9", 99, "blue"];
console.log(student[0]);

var student1 = {
    "name": "Rachit",
    "grade":  "Grade 9"
}
console.log(student1.name)*/