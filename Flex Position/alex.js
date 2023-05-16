function alex(x,y,func) {
    return func(x,y);
}
console.log(alex(5,2,(x,y)=>x+y));
console.log(alex(11,43,(x,y)=>x*y));
let alexanmuco=alex(123,312,(x,y)=>x+y*2)
console.log(alexanmuco)
let obj={

}
obj.pesho=123;
obj.alex=19777;
obj.mira=89898;
console.log(obj.pesho);
let pass={
    alexperi:"3123123123",
    alexx24:"kola123123",
    pesho216:4545
}
let arr=[1,2,3,4,5,6,7,8,9];
let sumOfArr=0;
for(let i=0;i<arr.length;i++) {
sumOfArr=sumOfArr+arr[i]
console.log(arr[i])
}
console.log(sumOfArr);
arr.push(10)
console.log(arr[arr.length-1]);
