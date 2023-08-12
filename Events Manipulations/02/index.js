
    let button=document.getElementById('button');
    button.addEventListener('click',deleteEmail);
    function deleteEmail() {
        console.log("test")
        let email=document.getElementById('input');
        let elements=document.getElementsByClassName('email');
        for(let i=0;i<elements.length;i++) {
            if(elements[i].textContent==email.value) {
                let parent=elements[i].parentNode;
                parent.parentNode.removeChild(parent);
                let result=document.createElement('span');
                let br=document.createElement('br');
                result.textContent="Deleted";
                document.body.appendChild(result);
                result.appendChild(br);
                input.value='';

            }
        }
    }