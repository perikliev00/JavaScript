let td=document.getElementsByTagName('td');
let check=document.getElementById('check');
let reset=document.getElementById('reset');
let inputs=document.getElementsByTagName('input');
let table=document.getElementsByTagName('table')[0];
let main=document.getElementsByClassName('main')[0];
let result=document.getElementById('result')
reset.addEventListener('click',function() {
    table.classList.remove('new-style');
    table.classList.remove('wrong-style');
    result.textContent='';
    for(let i=0;i<inputs.length;i++) {
        inputs[i].value='';
    }
        for(let i=0;i<td.length;i++) {
            td[i].classList.remove("new-style");
            td[i].classList.remove("wrong-style");
        }
    }
)
check.addEventListener('click',function() {
    let firstSum=Number(inputs[0].value)+Number(inputs[1].value)+Number(inputs[2].value);
    let secondSum=Number(inputs[3].value)+Number(inputs[4].value)+Number(inputs[5].value);
    let thirdSum=Number(inputs[6].value)+Number(inputs[7].value)+Number(inputs[8].value);
    let fourthSum=Number(inputs[0].value)+Number(inputs[3].value)+Number(inputs[6].value);
    let fifthSum=Number(inputs[1].value)+Number(inputs[4].value)+Number(inputs[7].value);
    let sixthSum=Number(inputs[2].value)+Number(inputs[5].value)+Number(inputs[8].value);
    for(let i=0;i<inputs.length;i++) {
        if(inputs[i].value=="") {
            result.textContent='Enter all numbers'
            return;
        }
    } 
    if(((firstSum==secondSum)&&(thirdSum==firstSum)&&(fourthSum==firstSum)&&(fifthSum==firstSum)&&(sixthSum==firstSum))&&(firstSum!=undefined)) {
        table.classList.remove('wrong-style');
        table.classList.add('new-style');
        for(let i=0;i<td.length;i++) {
            td[i].classList.remove("wrong-style");
            td[i].classList.add('new-style');
        }
        result.textContent='Exellent you made the SUDOMU';
    } else {
        table.classList.add('wrong-style');
        let tr=document.getElementsByTagName('tr');
        let td=document.getElementsByTagName('td');
        for(let i=0;i<td.length;i++) {
            td[i].classList.add('wrong-style');
        }
        result.textContent='You are not ready';
    }
})
