class Person {
    constructor(firstName,lastName,phone,eMail) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.phone=phone;
        this.eMail=eMail;
    }
    render(element) {
        element=document.getElementsByTagName('main')[0].cloneNode(true);
        document.body.appendChild(element);
        element.style.display="block";
        element.getElementsByClassName('first-name')[0].textContent=this.firstName;
        element.getElementsByClassName('last-name')[0].textContent=this.lastName;
        let info=element.getElementsByClassName('info')[0];
        let button=element.getElementsByClassName('button')[0];
        info.getElementsByClassName('email')[0].textContent=this.eMail;
        info.getElementsByClassName('phone')[0].textContent=this.phone;
        button.addEventListener('click',() => {
            if(info.classList.contains('info')) {
                info.classList.remove('info');
            } else {
                info.classList.add('info')
            }
        })
}
}
let a=new Person('11','123','312','321312');
a.render('elemet');
let s=new Person('Alex','Perikli','alexanmuco@gmail.com','0893813214');
s.render('element');