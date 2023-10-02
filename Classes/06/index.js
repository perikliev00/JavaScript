function getPerson() {
    let arr=[];
    class Person {
        constructor(firstName,lastName,age,eMail) {
            this.firstName=firstName;
            this.lastName=lastName;
            this.age=age;
            this.eMail=eMail;
        }
    }
    let first=arr.push(new Person('Anna','Simpson',22,'anna@yahoo.com'));
    let second=arr.push(new Person('SoftUni'));
    let third=arr.push(new Person('Stephan','Johnson',25));
    let fourth=arr.push(new Person('Gabriel','Peterson',24,'g.p@gmail.com'));
    return arr;
}
let arr=getPerson();
console.log(arr[1]);
let firstNames=document.getElementsByClassName('firstName');
let secondNames=document.getElementsByClassName('lastName');
let ages=document.getElementsByClassName('age');
let email=document.getElementsByClassName('email')
for(let i=0;i<arr.length;i++) {
    firstNames[i].textContent=arr[i].firstName;
    secondNames[i].textContent=arr[i].lastName;
    ages[i].textContent=arr[i].age;
    email[i].textContent=arr[i].eMail;
}