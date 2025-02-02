import { expect } from 'chai';
import { rgbToHexColor } from '../index.js';

describe('Testing', function () {
  it('testing range', () => {
    expect(rgbToHexColor(100, 200, 300)).to.be.undefined;
  });
  it('testing range', () => {
    expect(rgbToHexColor(100, 300, 200)).to.be.undefined;
  });
  it('testing range', () => {
    expect(rgbToHexColor(100, 300)).to.be.undefined;
  });
  it('testing range', () => {
    expect(rgbToHexColor(10.2, 300, 200)).to.be.undefined;
  });
  it('testing range', () => {
    expect(rgbToHexColor(10.2, 300.328, 200.222)).to.be.undefined;
  });
  it('testing range', () => {
    expect(rgbToHexColor(300, 200, 200)).to.be.undefined;
  });
  it('testing range', () => {
    expect(rgbToHexColor(-300, -200, -200)).to.be.undefined;
  });
  it('invalid type', () => {
    expect(rgbToHexColor('ddd', 200, 300)).to.be.undefined;
  });
  it('invalid type', () => {
    expect(rgbToHexColor('ddd', '200', 'adsa')).to.be.undefined;
  });
  it('invalid type', () => {
    expect(rgbToHexColor(['ddd', '200', 'adsa'])).to.be.undefined;
  });
  it('valid result', () => {
    expect(rgbToHexColor(37, 83, 156)).to.equal('#25539C');
  });
  it('valid result', () => {
    expect(rgbToHexColor([37, 83, 156])).to.undefined;
  });
  it('valid result', () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
  });
  it('valid result', () => {
    expect(rgbToHexColor(555, 555, 5555)).to.be.undefined;
  });
  it('valid result', () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
  });
});
