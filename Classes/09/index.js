class Rectangle {
    constructor(width,height,color) {
        this.width=width;
        this.height=height;
        this.color=color;
    }
    calcArea() {
        return this.height*this.width;
    }
}
let a=new Rectangle(3,2,'red');
console.log(a.width);
console.log(a.height);
console.log(a.calcArea())