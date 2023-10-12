function classExtend(classToExtend) {
    classToExtend.prototype.value='Human';
    classToExtend.prototype.toString=function() {
       return `I am ${this.value}`;
    }
}
class Person{};
classExtend(Person);
let obj=new Person();
console.log(obj.toString());

