function typeText() {
    let text=document.getElementById('first').value;
    let type=document.getElementById('second').value;
    let result=document.getElementById('result');
    let arr=text.split(' ');
    let output='';
    if(type=="Camel Case") {
        for(let i=0;i<arr.length;i++) {
            if(i==0) {
                output=output+arr[i].toLowerCase();
            } else {
                let letter=arr[i].charAt(0);
                letter=letter.toUpperCase();
                output=output+letter+(arr[i].slice(1)).toLowerCase();
            }
        }
        result.innerHTML=output;
    }
    else if(type=="Pascal Case"){
        for(let i=0;i<arr.length;i++) {
            let letter=arr[i].charAt(0);
            letter=letter.toUpperCase();
            output=output+letter+(arr[i].slice(1)).toLowerCase();
            result.innerHTML=output;
        }
    } else {
        result.innerHTML="error"
    }
} 
typeText(['alex e pic','Camel Case']);