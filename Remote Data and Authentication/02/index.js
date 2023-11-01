init()
function init() {
    let postButton=document.getElementById('post');
    let getButton=document.getElementById('get');
    postButton.addEventListener('click',()=> {
        let userData=document.getElementById('user').value;
        let contentData=document.getElementById('content').value;
        let obj= {
            userData:userData,
            contentData:contentData
        }
         postData(obj);
         document.getElementById('user').value='';
         document.getElementById('content').value='';
    })
    getButton.addEventListener('click',getData);
}
async function postData(data) {
    await fetch(`http://localhost:3030/jsonstore/demo.json`,{
        method:'post',
        headers:{'Content-type':'application/json' },
        body:JSON.stringify(data),
    })
}
async function getData() {
    await fetch('http://localhost:3030/jsonstore/demo.json')
    .then((response)=>response.json())
    .then(handelData)
    .catch((error)=>{throw new Error(`${error}`)})
}
function handelData(data) {
    console.log(data)
    let keys=Object.keys(data);
    for(let key of keys) {
        let container=document.createElement('div');
        let values=Object.values(data[key]);
        delete values[2];
        for(let value of values) {
            let p=document.createElement('p');
            p.textContent=value;
            container.appendChild(p);
        }
        document.body.appendChild(container);
    }
}