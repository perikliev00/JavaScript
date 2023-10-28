function loadCommits() {
    let repo=document.getElementById('repo').value;
    let name=document.getElementById('name').value;
    fetch(`https://api.github.com/repos/${name}/${repo}/commits`)
    .then(handelResponse)
    .then(handelData)
    .catch(handelError)
}
function handelResponse(responce) {
    if(responce.ok==false) {
        throw new Error(`Error: ${responce.status},${responce.statusText}`)
    }
    return responce.json();
}
function handelData(data) {
    console.log(data);
    let myList=document.createElement('ul');
    for(let item of data) {
        let li=document.createElement('li');
        let a=document.createElement('a');
        a.href=item.html_url;
        a.textContent=item.author.login+' '+item.commit.message
        li.appendChild(a);
        myList.appendChild(li);
    }
    document.body.appendChild(myList);
    return data.json();
}
function handelError(error) {

}