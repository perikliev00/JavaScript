function personAndTeacher() {
    class Person {
        constructor(firstName,lastName) {
            this.firstName=firstName;
            this.lastName=lastName;
        }
    }
    class Teacher extends Person {
        constructor(name,lastName,subject) {
            super(name,lastName)
            this.subject=subject;
        }
    }
    return {
        Person,
        Teacher
    } ;
}
