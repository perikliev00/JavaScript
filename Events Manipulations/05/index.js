function fillSection() {
    let sections=document.getElementsByClassName('section');
    for(let i=0;i<sections.length;i++) {
        sections[i].addEventListener('mouseover',mouseOver);
        sections[i].addEventListener('mouseout',mouseOut);
    }
    function mouseOver(event) {
        console.log(event.target)
        if(event.target) {
        event.target.parentNode.setAttribute('class','over'); 
        }
        }
        function mouseOut(event) {
            event.target.removeAttribute('class','over');
            event.target.setAttribute('class','section')
        }
}