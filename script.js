class BookList {
    constructor() {
        this.wasReadCount = 0;      // number
        this.notReadCount = 0;      // number

        this.allBooks = []

        this.nextBook = undefined;
        this.currentBook = undefined;
        this.lastBook = undefined;
    }

    add(book) {
        this.allBooks.push(book);
        this.notReadCount++;
    };

    finishCurrentBook() {
        // debugger;
        if(this.currentBook === undefined) {
            this.currentBook = this.allBooks[0]; // Book object
            this.nextBook = this.allBooks[1];
        }

        this.toString();

        // should mark the book that is currently being read as "read"
        this.currentBook.read = true;

        // Give it a read date of new Date(Date.now())
        this.currentBook.readDate = Date.now();
        this.wasReadCount++;
        this.notReadCount--;

        // Change the last book read to be the book that just got finished
        this.lastBook = this.currentBook;

        // Change the current book to be the next book to be read
        this.currentBook = this.nextBook;

        // Change the next book to be read property to be the first unread book you find in the list of books
        // 1я непрочитанная в списке всех книг
        this.nextBook = this.allBooks.filter((book) => book.read === false && book !== this.currentBook)[0];
    }

    toString() {
        console.log(`
        next: ${this.nextBook && this.nextBook.toString()};
        current: ${this.currentBook && this.currentBook.toString()};
        was read: ${this.wasReadCount};
        not read: ${this.notReadCount};
        `)
    }
}







class Book {
    constructor(title, genre, author) {
        this.title = title;
        this.genre = genre;
        this.author = author;

        this.read = false;
        this.readDate = undefined;
    }

    toString() {
        return `${this.title} ${this.author}`;
    }
}

let booklist = new BookList();
bookArr.forEach(element => booklist.add(new Book(element.title, element.genre, element.author)));

booklist.finishCurrentBook();
booklist.finishCurrentBook();
booklist.finishCurrentBook();
booklist.finishCurrentBook();
