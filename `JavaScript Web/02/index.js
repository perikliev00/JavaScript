function button() {
let headers=document.getElementsByTagName('h1');
headers[0].innerHTML=`Alex e pich`;
let sum=0;
let firstNumber=(document.getElementsByTagName('input')[0]).value;
let secondNumber=(document.getElementsByTagName('input')[1]).value;
sum=Number(firstNumber)+Number(secondNumber);
headers[1].innerText=sum;
console.log(sum);
}