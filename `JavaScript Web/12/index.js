function words() {
    let input=document.getElementById("input").value;
    let output=document.getElementsByClassName("output");
    let arr=document.getElementsByTagName('span');
    let elements=[];
    let index=0;
    for(let i=0;i<arr.length;i++) {
        let bool=false;
        let str=arr[i].innerHTML;
        for(let x=0;x<input.length;x++) {
            if(str[x]==input[x]) {
                bool=true;
            } else {
                bool=false;
                break;
            }
        }
        if(bool==true) {
            index++;
            arr[i].style.textDecoration="underline";
        } 
    }
    if(index==0||index==1) {
    output[0].innerHTML=index+" match found";
    } else {
    output[0].innerHTML=index+" matches found"; 
    }
}