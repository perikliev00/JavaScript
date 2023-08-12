function attacnhedGradientEvents() {
    let gradient=document.getElementsByClassName(`gradient-box`)[0];
    gradient.addEventListener('mousemove',gradientMove);
    gradient.addEventListener('mouseout',gradientOut);
    function gradientMove(event) {
        let power=event.offsetX/ (event.target.clientWidth-1);
        power=Math.trunc(power*100);
        document.getElementsByClassName('result')[0].textContent=power+ '%';
    }
    function gradientOut(event) {
        document.getElementsByClassName('result')[0].textContent='';
    }
}