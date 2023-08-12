let button=document.getElementById('button');
button.addEventListener('click',add);
let list=document.getElementById('list');
function add() {
    let element=document.createElement('li');
    let link=document.createElement('a');
    let input=document.getElementById('input');
    element.textContent=input.value;
    element.setAttribute('class','element')
    list.appendChild(element);
    link.textContent='Delete'
    element.appendChild(link);
    link.setAttribute('class','link')
    link.addEventListener('click' ,remove);
    function remove() {
        let el=link.parentNode;
        el.parentNode.removeChild(el);
    }
}