function subSUm(arr,a,b) {
    let i=a;
    let x=b+1;
    let sum=0;
    if(typeof(arr)!='object') {
        return NaN;
    } else if(a<0) {
        i=0;
    } else if(b>arr.length) {
        x=arr.length;
    }
    for(let s=i;s<x;s++) {
        if(typeof(arr[s])!='number') {
            sum=NaN;
            break;
        }
        sum=sum+Number(arr[s]);
    }
    return sum;
}
let z=subSUm('text', 0, 2);
console.log(z);