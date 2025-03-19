// Create a library app

/* Part 1 */

//books stored in array

//Function that:
//Can take some arguments
//Create a book from this arguments
//Then store the new book objct into an array

//All books need have a unique idm use crypto.randomUUID


/* Part 2 */

// Function that loops through the array and display each book on the page

//Read the 3.1 section

/* Part 3 */

// New book button for users

/* Part 4 */

// Button for removing books

/* Part 5 */

// Button that shows the book read status.


// App dom
let addNewBook = document.querySelector(".add-book"); //NewBook button

// Card info
let cardTittle = document.querySelector(".tittle"); 
let cardAuthor = document.querySelector(".author");
let cardPages = document.querySelector(".pages");
let cardCheckBtn = document.querySelector("#read");
let remove = document.querySelector(".remove-book");


// form
let newBookForm = document.querySelector(".new-book-form");
// Card form info
let newBookTittle = document.querySelector("#tittle-input");
let newBookAuthor = document.querySelector("#author-input");
let newBookPages = document.querySelector("#pages-input");
let newBookCheckBtn = document.querySelector("#read-check");
let submitBtn = document.querySelector(".submit-btn");


const mylibrary = [];


function Book(tittle, author, pages, read) {
    this.tittle = tittle;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary() {
// Grab the book info
// Store this data in the book obj constructor
// Create a unique id
// Push this new book obj to the "myLibrary" array.
    let tittleValue = "The habbit";
    let authorValue = "J.J.R Tolkien"
    let pagesValue = 299
    let readValue = "Already read"
    new Book(tittleValue, authorValue, pagesValue , readValue)
    
}


function showcardBooks() {



}

function removeBook() {



}


function createBookCard() {
    


}