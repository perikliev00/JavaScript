class Person {
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
    get name() {
        return this.name;
    }
    set name(value) {
        if(value.length<2) {
            throw new Error(`Your name have to be bigger than 1 letter`);
        }
    }
    get print() {
        return `${this.name}:${this.age}`;
    }

}
let a=new Person(`alex`,2);
console.log(a.name)