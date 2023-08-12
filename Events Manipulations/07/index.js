let buttons=document.getElementsByClassName('button');
let text=document.getElementById('text');
let names=[];
let total=0;
let prices=[];
let bool=true;
for(let i=0;i<buttons.length;i++) {
    buttons[i].addEventListener('click',function() {
        if(bool==true) {
        let name=buttons[i].parentElement.parentElement;
        name=name.querySelectorAll('.product-name')[0].textContent;
        let price=buttons[i].parentElement.parentElement;
        price=price.querySelectorAll('.price')[0].textContent;
        console.log(name);
        text.innerHTML=text.innerHTML+`Added ${name} for ${price} in the cart.<br>`
        if(names.includes(name)) {
        } else {
            names.push(name)
        }
        prices.push(Number(price));
    }
} 
)
let chekout=document.getElementById('chekout');
chekout.addEventListener('click' ,function() {
    if(bool==true) {
    bool=false
    for(let i=0;i<prices.length;i++) {
        total=total+prices[i];
    }
    text.innerHTML=text.innerHTML+`You bought ${names.join(',')} for ${total.toFixed(2)}lv.`
}
}
)

}