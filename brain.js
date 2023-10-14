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

// MODAL OPENNING AND CLOSING

let modal = document.getElementById("sub-b");

function openModal() {
    modal.classList.add("sub-bop");
}

function closeModal() {
    modal.classList.remove("sub-bop");
}