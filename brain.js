const myLibrary = [];

function Book(a, b, c, d) {
    this.author = a,
    this.book = b,
    this.pages = c,
    this.status = d
}

function addBookToLibrary(a, b, c , d) {
    myLibrary.push(new Book(a, b, c , d));
    createCard(a, b, c, d);
}

function createCard(author, book, pages, status){
    // We create the card
    let cContainer = document.getElementById("mainw");
    let newCard = document.createElement("div");
    cContainer.appendChild(newCard).className="card";
    // We add the rest
    
    // We add the Author name
    let dataAuthor = document.createElement("p");
    dataAuthor.textContent = author;
    newCard.appendChild(dataAuthor).className="dataAuthor";

    // We add the Books Name
    let dataBook = document.createElement("p");
    dataBook.textContent = book;
    newCard.appendChild(dataBook).className="dataBook";

    // We add the page Numbers
    let dataPages = document.createElement("p");
    dataPages.textContent = pages;
    newCard.appendChild(dataPages).className="dataPages";


}



// READING FORMS CONTENT

function getInfo(){
    let mAuthor = document.getElementById("authorName").value;
    let mBook = document.getElementById("bookName").value;
    let mPages = document.getElementById("pagesNumber").value;
    let mStatus = statusOf;
    if (mStatus == false) {
        mStatus = "Not Read";
    } else if (mStatus == true) {
        mStatus = "Read";
    }
    addBookToLibrary(mAuthor, mBook, mPages, mStatus);
    console.log(myLibrary);
    
}

let theForm = document.getElementById("theForm");

theForm.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.classList.remove("sub-bop");
    theForm.reset();
})

// MODAL OPENNING AND CLOSING

let modal = document.getElementById("sub-b");

function openModal() {
    modal.classList.add("sub-bop");
}

// READ STATUS

let statusButton = document.getElementById("inputs-status");
let statusOf = false;

function changeStatus(){

    if (statusOf == false )
    {
        statusButton.style.backgroundColor = "rgb(97 203 97)";
        statusButton.innerHTML = "Read";
        statusOf = true;
    } else if (statusOf == true) {
        statusButton.style.backgroundColor = "rgb(255, 137, 137)";
        statusButton.innerHTML = "Not Read";
        statusOf = false;
    }

    
}