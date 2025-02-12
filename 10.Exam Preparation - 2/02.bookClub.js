class BookClub {
    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }
    addBook (title, author) {
        const currentBook = this.books.find((book) => book.title === title && book.author === author);

        if(currentBook) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        }
        const newBook = {title, author};
        this.books.push(newBook);
        return `The book "${title}" by ${author} has been added to ${this.library} library.`
    }
    addMember (memberName) {
        if(this.members.includes(memberName)) {
            return `Member ${memberName} is already a part of the book club.`
        } else {
            this.members.push(memberName);
            return `Member ${memberName} has been joined to the book club.`
        }
    }
    assignBookToMember (memberName, bookTitle) {
        if(!this.members.includes(memberName)) {
            throw new Error(`Member ${memberName} not found.`)
        }
        const index = this.books.findIndex((book) => book.title === bookTitle);
        if(index === -1) {
            throw new Error(`Book "${bookTitle}" not found.`)
        }
        const removedProduct = this.books.splice(index, 1)[0];
        
        return `Member ${memberName} has been assigned the book "${removedProduct.title}" by ${removedProduct.author}.`
    }
    generateReadingReport () {
        if(this.members.length === 0) {
            return `No members in the book club.`
        }
        if(this.books.length === 0) {
            return `No available books in the library.`
        }
        const printInfo = this.books.map((book) => 
            `"${book.title}" by ${book.author}`)

        return `Available Books in ${this.library} library:\n${printInfo.join('\n')}`
    }
}
    

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Peter", "The Great Gatsby"));
// console.log(myBookClub.assignBookToMember("Mary", "The Great Gatsby"));
// console.log(myBookClub.assignBookToMember("Mary", "The Great Gatsby"));
console.log(myBookClub.generateReadingReport());
