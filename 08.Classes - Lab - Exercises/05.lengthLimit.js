class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = Number(innerLength)
    }
    increase(value) {
        this.innerLength += Number(value)
    }
    decrease(value) {
        if((this.innerLength - value) <= 0) {
            this.innerLength = 0
        } else {
            this.innerLength -= Number(value)
        }
    }
    toString(){
        if(this.innerLength === 0) {
            return '...'
        } else if(this.innerString.length > this.innerLength) {
            return this.innerString.slice(0, this.innerLength) + '...'
        } else return this.innerString
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
