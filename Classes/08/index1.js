class Numbers {
    constructor(x,y) {
        this.x=x;
        this.y=y;
    }
    get x() {
        return this.x;
    }
    set x(value) {
        value=value*2;
        this._x=value;
        if(value<9) {
            throw new Error(`Your number have to be bigger than 8`)
        }
    }
    get tripleNUmber() {
        return this._x*3
    }
}
let a=new Numbers(221,2);
console.log(a._x);
console.log(a.tripleNUmber);
console.log(a._x);