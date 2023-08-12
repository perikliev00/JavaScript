function elements(arr) {
    let divs=document.getElementsByClassName('inside');
    for(let i=0;i<divs.length;i++) {
        divs[i].addEventListener('click',function() {
            let paragraph=document.createElement('p');
            paragraph.textContent=arr[i];
            divs[i].appendChild(paragraph);
            paragraph.style.display="inline";
        })
    }
}
elements(['first','second','third','fourth']);