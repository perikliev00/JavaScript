class Circle {
    constructor(radius) {
        this.radius=radius;
    }
    get diameter() {
        return this.radius*2;
    }
    set diameter(value) {
        value=value/2;
    }
    area() {
        return Math.PI*Math.pow(2,this.radius);
    }
}
let a=new Circle(2);
console.log(a.diameter);
console.log(a.radius);
console.log(a.area());