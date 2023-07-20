function solve() {
    let elements=document.getElementsByTagName('li');
    let input=document.getElementById('input').value;
    console.log(elements)
    for(let i=0;i<elements.length;i++) {
        if(elements[i].charAt(0)==input.charAt(0)) {
            for(let x=1;x<input.length;x++) {
                if((elements[i]).charAt(x)==input.charAt(x)) {
                    continue;
                } else {
                    break;
                }
                if(x==input.lenght-1) {
                    elements[i].value.style.textDecoration="underline";
                }
            }
        }
    }
}