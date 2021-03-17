
let bookArr = [
    {
        title: "Moby-Dick",
        genre: "Novel",
        author: "Herman Melville",
        read: false,
        readDate: ""
    },
    {
        title: "White Fang",
        genre: "Adventure",
        author: "Jack London",
        read: true,
        readDate: ""
    },
    {
        title: "Martin Eden",
        genre: "Novel",
        author: "Jack London",
        read: false,
        readDate: ""
    },
    {
        title: "Journey to the Center of the Earth ",
        genre: "Science fiction",
        author: "Jules Gabriel Verne",
        read: false,
        readDate: ""
    }
]


class BookList {
    constructor() {
        this.wasRead = [];
        this.notRead = [];
        this.read;
        this.isreading;
        this.willRead;
        this.allBooks = []
    }

    add(book) {
        this.allBooks.push(book);
        // this.allBooks.(book.read) === true ? this.wasRead.push(book) : this.notRead.push(book); // перенос книги в нужный масив


    };

    finishCurrentBook() {
        this.allBooks.forEach(element => {
            if (element.read === true) {
                this.wasRead.push(element);
                element.readDate = new Date(Date.now())
                console.log(element.readDate);
            } else {
                this.notRead.push(element);
            }
        })
    }
}







class Book {
    constructor(title, genre, author, read, readDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }
}

let booklist = new BookList();



bookArr.forEach(element => booklist.add(new Book(element.title, element.genre, element.author, element.read, element.readDate)));

booklist.finishCurrentBook();

console.log(booklist.wasRead);