let main=document.createElement('div')
document.body.appendChild(main);
let ul=document.createElement('ul');
main.appendChild(ul);
let li=document.createElement('li');
li.textContent='Alex'
ul.appendChild(li);
main.setAttribute("class","main");
let input=document.createElement('input');
main.appendChild(input);
let button=document.createElement('button');
button.setAttribute("onclick" ,"onClick()");
main.appendChild(button);
button.textContent='Add element';
let secondButton=document.createElement('button');
secondButton.textContent='Delete'
main.appendChild(secondButton);
secondButton.addEventListener("click",remove);
function onClick() {
    let newLi=li.cloneNode(true);
    newLi.textContent=document.getElementsByTagName('input')[0].value;
    ul.appendChild(newLi);
    document.getElementsByTagName('input')[0].value='';
}
function remove() {
    let elementsLi=document.getElementsByTagName('li');
    ul.removeChild(elementsLi[elementsLi.length-1])
}
