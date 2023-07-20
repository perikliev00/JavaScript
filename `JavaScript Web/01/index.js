let a=document.getElementsByTagName('h1');
a[0].innerHTML="Petio";
let obj={};
for(let i=0;i<a.length;i++) {
obj[i]=a[i].innerHTML;
}
console.log(obj);
for(let i=0;i<a.length;i++) {
    a[i].innerHTML='alex p'
}


