let myElement=document.getElementsByTagName('div')[0];
myElement.addEventListener('click',function() {
    let mybtn=document.createElement('button');
    mybtn.stopPropagantion();
    myElement.appendChild(mybtn);
})