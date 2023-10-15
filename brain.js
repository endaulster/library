const myLibrary = [];

function Book(a, b, c, d) {
    this.author = a,
    this.book = b,
    this.pages = c,
    this.status = d
}

function addBookToLibrary(a, b, c , d) {
    myLibrary.push(new Book(a, b, c , d));
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