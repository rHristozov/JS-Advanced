import { expect } from "chai";
import { lookupChar } from "../03.charLookup.js";

describe('Testing Char Lookup', function() {
    it('Type testing', () => {
        expect(lookupChar('str', true)).to.be.undefined
    })
    it('Type testing', () => {
        expect(lookupChar('str', 1.5)).to.be.undefined
    })
    it('Type testing', () => {
        expect(lookupChar(1, true)).to.be.undefined
    })
    it('Type testing', () => {
        expect(lookupChar(1, 1)).to.be.undefined
    })
    it('Testing index', () => {
        expect(lookupChar('str', -1)).to.eq('Incorrect index')
    })
    it('Testing index', () => {
        expect(lookupChar('str', 3)).to.eq('Incorrect index')
    })
    it('Testing index', () => {
        expect(lookupChar('str', 5)).to.eq('Incorrect index')
    })
    it('Testing result', () => {
        expect(lookupChar('str', 1)).to.eq('t')
    })
})