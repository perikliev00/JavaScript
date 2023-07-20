function sum() {
    let arr=document.getElementsByClassName('numb');
    let sumOf=0;
    console.log(arr[1].innerHTML);
    for(let i=0;i<arr.length;i++) {
        sumOf=sumOf+Number(arr[i].innerHTML);
    }
    let result=document.getElementsByTagName('h1');
    result[0].innerHTML=result[0].innerHTML+':'+sumOf;
}
