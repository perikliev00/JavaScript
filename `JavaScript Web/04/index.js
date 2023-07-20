function collect() {
    let items=document.getElementsByTagName('li');
    let str='';
    for(let item of items) {
        str=str+item.innerHTML+"\n";
    }
    document.getElementById('area').value=str;
}