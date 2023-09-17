function formatCurency(separator,symbol,symbolFirst,value) {
     return function (value){
    let result=Math.trunc(value)+separator;
    result=result+value.toFixed(2).substr(-2,2);
    if(symbolFirst==true) {
        return symbol+' '+result;
    } else {
        return result+' '+symbol;
    }
}
}
let dollarFormatter = formatCurency(',', '$', true, value);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71
