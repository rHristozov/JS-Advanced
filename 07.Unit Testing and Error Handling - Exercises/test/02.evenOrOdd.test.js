import { expect } from "chai";
import { isOddOrEven } from "../02.evenOrOdd.js";


describe('Test is odd or even', function() {
    it('Testing for type', () =>{
        expect(isOddOrEven(1)).to.be.undefined
    })
    it('Testing for type', () =>{
        expect(isOddOrEven([])).to.be.undefined
    })
    it('Testing for type', () =>{
        expect(isOddOrEven({})).to.be.undefined
    })
    it('Testing for type', () =>{
        expect(isOddOrEven(true)).to.be.undefined
    })
    it('Testing for odd/even', () =>{
        expect(isOddOrEven('d')).to.equal('odd')
    })
    it('Testing for odd/even', () =>{
        expect(isOddOrEven('dd')).to.equal('even')
    })
})