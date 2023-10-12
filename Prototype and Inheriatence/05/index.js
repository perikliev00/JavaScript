function createClasses() {
    class Figure {
        constructor(value) {
            this.cm=value;
            this.mm=value*100;
            this.m=value/100;
        }
        changeUnits(value) {
            this.cm=value;
            this.mm=value*100;
            this.m=value/100;
        }
        toString() {
            console.log(`Units ${this.cm} ,${this.mm}, ${this.m}`);
        }
        get area() {

        }
    }
    class Circle extends Figure{
        constructor(radius){
            super(radius);
            this.radius=radius;
        }
        get area() {
            return this.radius*this.radius*Math.PI;
        }
        toString() {
            console.log(`Figures units: ${this.cm},${this.mm},${this.m} Area: ${this.area} - radius: ${this.radius}`);
        }
    }
    class Rectangle extends Figure {
        constructor(width,height,value) {
            super(value);
            this.width=width;
            this.height=height;
        }
        get area() {
            return this.width*this.height
        }
        toString() {
            console.log(`Figures units: {type} Area: ${area} - width: ${this.width}, height:${this.height}`)
        }
    }
    return {
        Figure,
        Circle,
        Rectangle
    }
}
let x=createClasses();
let f=new x.Figure(17);
f.toString();
f.changeUnits(15);
let c=new x.Circle('11');
console.log(c.area);
c.radius=10;
console.log(c.area);
c.toString();
