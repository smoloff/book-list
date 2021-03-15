class BookList {
    constructor() {
        this.read;
        this.isreading;
        this.willRead;
    }
    allBooks = [];

    add(book) {};
    finishCurrentBook() {};

    nextBook;
    currentBook;
    lastBook;


}

class Book{
    constructor(title, genre, author, read, readDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }
}