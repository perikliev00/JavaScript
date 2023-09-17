function listProcessor(arr) {
    let myArr=[];
    for(let i=0;i<arr.length;i++) {
        let container=arr[i].split(" ");
        if(container[0]=='add') {
            myArr.push(container[1]);
        } else if(container[0]=='remove') {
            for(let x=0;x<myArr.length;x++) {
                if(myArr[x]==container[1]&&container[0]=='remove') {
                    myArr.splice(x,1);
                }
            }
        }
    }
    return myArr;
}
let closure=listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
console.log(closure);
closure=listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);
console.log(closure);