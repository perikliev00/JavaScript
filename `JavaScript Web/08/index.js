function difference() {
    let firstNumb=document.getElementById('first').value;
    let secondNumb=document.getElementById('second').value;
    let res=document.getElementById('result');
    res.innerHTML=(Number(firstNumb)-Number(secondNumb)).toFixed(1);
}
difference();
