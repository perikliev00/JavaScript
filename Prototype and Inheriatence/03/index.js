function toStringExtention() {
    class Person {
        constructor(firstName,lastName) {
            this.firstName=firstName;
            this.lastName=lastName;
        }
        toString() {
            console.log(`${this.firstName} ${this.lastName}`);
        }
    }
    class Teacher extends Person {
        constructor(firstName,lastName,subject) {
            super(firstName,lastName);
            this.subject=subject;
        }
    }
    class Student extends Person {
        constructor(firstName,lastName,grade) {
            super(firstName,lastName);
            this.grade=grade;
        } 
    }
    return {
        Person,
        Student,
        Teacher
    }
}