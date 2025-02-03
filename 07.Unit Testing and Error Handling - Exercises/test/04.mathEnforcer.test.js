import { expect } from "chai";
import { mathEnforcer } from "../04.mathEnforcer.js";

describe('Testing Math Enforcer', function() {
    describe('Testing addFive function', function(){
        it('type testing', () =>{
            expect(mathEnforcer.addFive(true)).to.be.undefined
        })
        it('type testing', () =>{
            expect(mathEnforcer.addFive([1])).to.be.undefined
            expect(mathEnforcer.addFive(1, null)).to.equal(undefined);
        })
        it('type testing', () =>{
            expect(mathEnforcer.addFive(undefined)).to.be.undefined
        })
        it('type testing', () =>{
            expect(mathEnforcer.addFive('sa')).to.be.undefined
        })
        it('type testing', () =>{
            expect(mathEnforcer.addFive({})).to.be.undefined
        })
        it('testing result', () =>{
            expect(mathEnforcer.addFive(5)).to.equal(10)
        })
        it('testing result', () =>{
            expect(mathEnforcer.addFive(-5)).to.equal(0)
        })
        it('testing result', () =>{
            expect(mathEnforcer.addFive(0)).to.equal(5)
        })
        it('testing result', () =>{
            expect(mathEnforcer.addFive(5.2)).to.be.closeTo(10.2, 0.01)
        })
        it('testing resultw', () =>{
            expect(mathEnforcer.addFive(-5.5)).to.be.closeTo(-0.5, 0.01)
        })
    })
    describe('Testing subtractTen function', function(){
        it('type testing', () =>{
            expect(mathEnforcer.subtractTen(true)).to.be.undefined
        })
        it('type testing', () =>{
            expect(mathEnforcer.subtractTen([1])).to.be.undefined
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined);

        })
        it('type testing', () =>{
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined
        })
        it('type testing', () =>{
            expect(mathEnforcer.subtractTen({})).to.be.undefined
        })
        it('type testing', () =>{
            expect(mathEnforcer.subtractTen('sa')).to.be.undefined
        })
        it('testing result', () =>{
            expect(mathEnforcer.subtractTen(15)).to.equal(5)
        })
        it('testing result', () =>{
            expect(mathEnforcer.subtractTen(-15)).to.equal(-25)
        })
        it('testing result', () =>{
            expect(mathEnforcer.subtractTen(10.2)).to.be.closeTo(0.2, 0.01)
        })
        it('testing resulta', () =>{
            expect(mathEnforcer.subtractTen(0)).to.be.closeTo(-10, 0.01)
        })
        it('testing result', () =>{
            expect(mathEnforcer.subtractTen(-5.2)).to.be.closeTo(-15.2, 0.01)
        })
    })
    describe('Testing sum function', function(){
        it('type testing', () =>{
            expect(mathEnforcer.sum(true, 1)).to.be.undefined
        })
        it('type testing', () =>{
            expect(mathEnforcer.sum([1], 2)).to.be.undefined
        })
        it('type testing', () =>{
            expect(mathEnforcer.sum([1], '2')).to.be.undefined
            expect(mathEnforcer.sum(1, null)).to.equal(undefined);

        })
        it('type testing', () =>{
            expect(mathEnforcer.sum('1', '2')).to.be.undefined
        })
        it('testing result', () =>{
            expect(mathEnforcer.sum(15, 5)).to.equal(20)
        })
        it('testing result', () =>{
            expect(mathEnforcer.sum(-15, -5)).to.equal(-20)
        })
        it('testing result', () =>{
            expect(mathEnforcer.sum(-15, 5)).to.equal(-10)
        })
        it('testing result', () =>{
            expect(mathEnforcer.sum(10.2, 1)).to.be.closeTo(11.2, 0.01)
        })
        it('testing result', () =>{
            expect(mathEnforcer.sum(0, 0)).to.be.closeTo(0, 0.01)
        })
        it('testing result', () =>{
            expect(mathEnforcer.sum(10.2, 5.2)).to.be.closeTo(15.4, 0.01)
        })
        it('testing result', () =>{
            expect(mathEnforcer.sum(10.2, -5.2)).to.be.closeTo(5, 0.01)
        })
        it('testing result', () =>{
            expect(mathEnforcer.sum(-10.2, -5.2)).to.be.closeTo(-15.4, 0.01)
        })
        it('testing result', () =>{
            expect(mathEnforcer.sum(-10.2, 5.2)).to.be.closeTo(-5, 0.01)
        })
        it('testing result', () =>{
            expect(mathEnforcer.sum(-5.2, -1)).to.be.closeTo(-6.2, 0.01)
        })
        it('testing result', () =>{
            expect(mathEnforcer.sum(5.2, -1)).to.be.closeTo(4.2, 0.01)
        })
        it('testing result', () =>{
            expect(mathEnforcer.sum(5, -10)).to.be.closeTo(-5, 0.01)
        })
        it('testing result', () =>{
            expect(mathEnforcer.sum(-5.1, 10)).to.be.closeTo(4.9, 0.01)
        })
        it('testing result', () =>{
            expect(mathEnforcer.sum(5, 0.5)).to.be.closeTo(5.5, 0.01)
        })
        it('testing result', () =>{
            expect(mathEnforcer.sum(-5, -0.5)).to.be.closeTo(-5.5, 0.01)
        })
        it('testing result', () =>{
            expect(mathEnforcer.sum(5, -0.5)).to.be.closeTo(4.5, 0.01)
        })
        it('testing result', () =>{
            expect(mathEnforcer.sum(-5, 0.5)).to.be.closeTo(-4.5, 0.01)
        })
    })
})