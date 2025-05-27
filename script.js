
// array for stored books, inserted by the user
const myLibrary = [];

// constructor for books
function Book = (title, author, pageNumber, read){
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.read = read;
    // check again the last class to remember how to finish this construct
};

//function that gets the new books infos and stores them in the array with an unique id
function addBookToLibrary(){
// function that takes some arguments
// function that creates a book from those arguments
// stores the book in the array
// all new books should have an unique id (data-attribute) ("crypto.randomUUID()")

};

// function that loops through the myLibrary array
// displays that book each one in a card
function displayLibrary(){
    
};

// event listener for a button that brings up a form to input all the infos for the new book
// with that, add it to the library array and to a new card display
addBookBtn.addEventListener("click", (){

})

// if the submit button gives an issue by not do what i expect it to do,
// should consider using the "event.preventDefault();" 
// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

// event listener for button that removes that unique id from the card of books
removeBookBtn.addEventListener("click", (){

})

// event listener for button that marks that book as read/unread in the card of books
// create Book prototype function that toggle a book instance `read` status
readBtn.addEventListener("click", (){

})

unreadBtn.addEventListener("click", (){

})