class List {
    arr=[];
    get size() {
        return this.arr.length;
    }
    add(value) {
        this.arr.push(value);
        this.arr.sort();
    }
    remove(index) {
        if(index-1>this.arr.length) {
            throw new Error(`Invalid index`)
        }
        this.arr.splice(index,1);
        this.arr.sort();
    }
    get(index) {
        if(index-1>this.arr.length) {
            throw new Error(`Invalide index`);
        }
        return this.arr[index]
    }
}
// let a=new List();
// a.add(12);
// a.add(1);
// a.add(22);
// a.add(0);
// console.log(a.arr);
// a.remove(2);
// console.log(a.arr);
// console.log(a.get(2));
// a.add(123);
// a.add(142);
// console.log(a.size)
