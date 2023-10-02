class Circle {
    constructor(r) {
        this.r=r;
    }
    get area() {
        return Math.PI*(this.r ** 2);
    }
}
let circle=new Circle(4);
console.log(circle.r);
console.log(circle.area);