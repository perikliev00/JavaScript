function solution() {
    return {
        mainString:'',
        append(string) {
            this.mainString=this.mainString+string;
        } ,
        removeStart(n) {
            this.mainString=this.mainString.substring(n,this.mainString.length);
        } ,
        removeEnd(n) {
            this.mainString=this.mainString.substring(0,this.mainString.length-n);
        },
        print() {
            console.log(this.mainString);
        }
    }
}
let my=solution();
my.append('alex');
console.log(my.mainString);
my.removeStart(2);
console.log(my.mainString);
my.removeEnd(1);
console.log(my.mainString);
my.print();
my.append('hello');
my.print();