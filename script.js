const addBookBtn = document.getElementById("addBookBtn");
const dialog = document.getElementById("bookDialog");
const cancelButton = document.getElementById("cancel");
const submitButton = document.getElementById("dialog-confirm-button");
const formDialog = document.getElementById("formDialog");
const cardsDisplay = document.querySelector(".cards");
const readButton = document.querySelector(".card-read");




// array for stored books, inserted by the user
const myLibrary = [];


// addbook button and cancelbutton on the addbook dialog
addBookBtn.addEventListener("click", function(){
    formDialog.reset();
    dialog.showModal();
}) 

cancelButton.addEventListener("click", function(){
    dialog.close();
})

// constructor for books
function Book (title, author, pageNumber, read, bookId){
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.read = read;
    this.bookId = bookId;
};

Book.prototype.toggleRead = function() {
    this.read = this.read === "yes" ? "no" : "yes";
};


// function that loops through the myLibrary array
// displays that book each one in a card
function displayLibrary(){
    cardsDisplay.innerHTML = "";
// array.foreach to show the infos inserted by the user in the cards
    myLibrary.forEach(function(book){
        let newCard = document.createElement("div");
        newCard.classList.add("card");

        newCard.innerHTML = `
        <div class = "card-author">Author: ${book.author}</div>
        <div class = "card-title">Title: ${book.title}</div>
        <div class = "card-pages">Number of Pages: ${book.pageNumber}</div>
        <button class = "card-read">${book.read === "yes" ? "Read" : "Unread"}</button>
        <button class = "card-remove">Remove</button>`;

        const readButton = newCard.querySelector(".card-read");
        readButton.classList.remove("read-yes", "read-no");
        readButton.classList.add(book.read === "yes" ? "read-yes" : "read-no")

        readButton.addEventListener("click", () =>{
            book.toggleRead();
            displayLibrary();
        })

        const removeBtn = newCard.querySelector(".card-remove");
        removeBtn.addEventListener("click", () =>{
            const index = myLibrary.findIndex(b => b.bookId === book.bookId);
            if (index > - 1){
                myLibrary.splice(index, 1);
                displayLibrary();
            }
        })

        cardsDisplay.appendChild(newCard);
    })
}



submitButton.addEventListener("click", function(event){
    event.preventDefault();
    dialog.close();
    // retrieving the forms data
    let bookAuthor = document.getElementById("author").value;
    let bookName = document.getElementById("bookName").value;
    let bookPages = document.getElementById("pages").value;
    let bookRead = document.getElementById("read").value;
    let bookId = crypto.randomUUID();
    const newBook = new Book (bookName, bookAuthor, bookPages, bookRead, bookId);
    myLibrary.push(newBook);
    displayLibrary();
    return bookAuthor, bookName, bookPages, bookRead, bookId;
})









// event listener for button that removes that unique id from the card of books
//removeBookBtn.addEventListener("click", (){
//
//})

// event listener for button that marks that book as read/unread in the card of books
// create Book prototype function that toggle a book instance `read` status
//readBtn.addEventListener("click", (){
//
//})

//unreadBtn.addEventListener("click", (){
//
//})