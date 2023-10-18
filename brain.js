const myLibrary = [];

function Book(a, b, c, d) {
    this.author = a,
    this.book = b,
    this.pages = c,
    this.status = d
}

function addBookToLibrary(a, b, c , d) {
    myLibrary.push(new Book(a, b, c , d));
    createCard();
}

function createCard(author, book, pages, status){
    // We create the card, but we should make a refresher
    let cContainer = document.getElementById("mainw");
    let AllCards = Array.from(document.querySelectorAll(".card"));

    AllCards.forEach( chil => chil.remove());
    
    for (let i = 0; i < myLibrary.length; i++)
    {
        let newCard = document.createElement("div");
        cContainer.appendChild(newCard).className="card";
        newCard.setAttribute("id", i);
        // We add the rest

        // We add the Books Name
        let dataBook = document.createElement("h2");
        dataBook.textContent = myLibrary[i].book;
        newCard.appendChild(dataBook).className="dataBook";

        // We add the Author name
        let dataAuthor = document.createElement("h3");
        dataAuthor.textContent = myLibrary[i].author;;
        newCard.appendChild(dataAuthor).className="dataAuthor";

        // We add the page Numbers
        let dataPages = document.createElement("p");
        dataPages.textContent = myLibrary[i].pages + " pages";
        newCard.appendChild(dataPages).className="dataPages";

        // The button part, we make a container for the buttons
        let buttonCon = document.createElement("div");
        newCard.appendChild(buttonCon).className="buttonCon";
        
        let dataStatus = document.createElement("button");
        dataStatus.innerHTML = myLibrary[i].status;
        buttonCon.appendChild(dataStatus).className="dataStatus";
        if (myLibrary[i].status=="Read")
        {
            dataStatus.textContent = "Read";
            dataStatus.style.backgroundColor = "rgb(97 203 97)";
        }

        let removerButton = document.createElement("button");
        removerButton.textContent = "Remove";
        buttonCon.appendChild(removerButton).className="removerButton";

    }
    // Toggle read for all cards

    let allToggles = document.querySelectorAll(".dataStatus");

    allToggles.forEach(sabro => sabro.addEventListener("mousedown", function()
    { 
        let id = sabro.parentElement.parentElement.id;
        if (myLibrary[id].status == "Read")
        {
            myLibrary[id].status = "Not Read";
            sabro.style.backgroundColor = "rgb(255, 137, 137)";
            sabro.textContent = "Not Read"; 
        } 
        else if (myLibrary[id].status == "Not Read")
        {
            myLibrary[id].status = "Read";
            sabro.textContent = "Read";
            sabro.style.backgroundColor = "rgb(97 203 97)";
        }

    } ));


    let allDeletes = document.querySelectorAll(".removerButton");

    allDeletes.forEach(del => del.addEventListener("mousedown", function()
    { 
        let id = del.parentElement.parentElement.id;
        myLibrary.splice(id, 1);
        createCard();
    } ));


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

// We add some example book

addBookToLibrary("J.K. Rowling", "Harry Potter and the Sorcerer's Stone", 420, "Not Read");    

