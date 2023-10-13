const myLibrary = [];

function Book(a, b, c, d) {
    this.author = a,
    this.book = b,
    this.pages = c,
    this.status = d
}

function addBookToLibrary(a, b, c , d) {
    myLibrary.push(new Book(a, b, c , d));
    return console.log("Done!");
}
