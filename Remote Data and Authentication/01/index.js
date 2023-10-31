let arr
function getData() {
    let data=fetch('http://localhost:3030/jsonstore/phonebook')
    .then(handleResponce)
    .then(handleData)
    .catch(handleError)
}
function handleResponce(response) {
    if(response.ok=!true) {
        throw new Error(`Error:${response.status},${response.textText}`)
    }
    return response.json();
}
function handleData(data) {
    let keys=Object.keys(data);
    console.log(keys);
    for(let key of keys) {
        let container=document.createElement('div');
        console.log(data[key]);
        let obj=data[key];
        
        let entries=Object.entries(obj);
        for(let [key,value] of entries) {
            let p=document.createElement('p');
            p.textContent=key+':'+value;
            container.appendChild(p);
        }
        document.body.appendChild(container);
    }
}
function handleError(error) {
    throw new Error(`${error}`);
}
function postData() {
    const data={tittle:`First Post`,content:'Hello server!'};
    fetch('http://localhost:3030/jsonstore/demo.json',{
        method:'post' ,
        headers: {'Content-type': 'application/json' },
        body:JSON.stringify(data)
    })
}
function getMyData() {
    fetch('http://localhost:3030/jsonstore/demo.json')
    .then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((error)=> {throw new Error(`${error}`)})
}