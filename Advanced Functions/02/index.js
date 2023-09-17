function solution(number) {
    let digit=number;
    return function(number) {
        return digit+number;
    };
}
let add5= solution(5);
console.log(add5(2));
console.log(add5(3));

