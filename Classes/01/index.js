class Point {
    constructor(x,y) {
        this.x=x;
        this.y=y;
    }
    static distance(p1,p2) {
        const dx=p1.x-p2.x;
        const dy=p1.y-p2.y;
        return Math.sqrt(dx ** 2 + dy ** 2);
    } 
}
let a=new Point(1,2);
console.log(a.x);
console.log(a.y);
console.log(Point.distance(1,2));
