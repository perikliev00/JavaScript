function loadRepos() {
    let name=document.getElementById('input').value;
    fetch(`https://api.github.com/users/${name}/repos`)
    .then(handelResponse)
    .then(handelData)
    .catch(handelError)
}
function handelResponse(response) {
    if(response.ok=!true) {
        throw new Error(`Your responce is incorect`)
    }
    return response.json();
}
function handelData(data) {
    let ul=document.getElementsByTagName('ul');
    if(ul.length>0) {
        document.body.removeChild(ul[0]);
    }
    let myList=document.createElement('ul');
    document.body.appendChild(myList);
    for(let item of data) {
        let li=document.createElement('li');
        let a=document.createElement('a');
        a.href=item.html_url;
        a.textContent=item.full_name;
        li.appendChild(a);
        myList.appendChild(li);
    }
    document.getElementById('input').value='';
}
function handelError(error) {
    console.log(error)
}