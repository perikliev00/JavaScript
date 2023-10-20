let sum=require("./index.js");
let chai=require('chai');
const { expect } = chai;
describe('Test sum',()=> {
    it('shoud return 5',()=> {
        let arr=[5];
        let result=sum(arr);
        expect(sum([arr])).to.equal(5);
    })
    it('shoud return 10',() => {
        let arr=[1,2,2,5];
        let result=sum(arr);
        expect(result).to.equal(10);
    })
}
)
