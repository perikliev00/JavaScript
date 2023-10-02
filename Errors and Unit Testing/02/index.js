function playingCards(number,type) {
    let obj={
        number:number,
        type:type, 
    }
    let arr=[2,3,4,5,6,7,8,9,10,'A','K','Q','J'];
    if(type=="S") {
        obj.type='\u2660 ';
    } else if(type=="H") {
        obj.type='\u2665 ';
    } else if(type=="A") {
        obj.type="\u2666 ";
    } else if(type=="C") {
        obj.type="♣";
    } else {
        throw new RangeError("Invalid range.");
    }
    if(!arr.includes(obj.number)) {
        throw new RangeError('Invalid range.');
    }
    return obj
}
let testObj=playingCards(2,'A');
let arr0=[];
let arr=['S','H','A','C'];
let arr1=[2,3,4,5,6,7,8,9,10,"A","K","Q","J"]
for(let i=0;i<arr.length;i++) {
for(let v=0;v<arr1.length;v++) {
let obj=playingCards(arr1[v],arr[i]);
arr0.push(obj);
     }
    }
for(let i=0;i<arr0.length;i++) {
console.log(arr0[i].number+" "+arr0[i].type);
}

