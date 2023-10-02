class Person {
    constructor(firstName,lastName,age,eMail) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.eMail=eMail;
    }
    toString() {
        console.log(`${this.firstName} ${this.lastName} (age:${this.age}, email ${this.eMail})`)
    }
}
let a=new Person('Alex','Perikliev',14,"alexp@gmail.com");
console.log(a.firstName);
a.toString();