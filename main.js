// App dom
let addNewBook = document.querySelector(".add-book"); //NewBook button

//Cards container
let bookShelf = document.querySelector(".books")

// Card info
let card = document.querySelector(".book-card");

let cardTitle = document.querySelector(".title"); 
let cardAuthor = document.querySelector(".author");
let cardPages = document.querySelector(".pages");
let cardCheckBtn = document.getElementById("read");
let remove = document.querySelector(".remove-book");


// form
let newBookForm = document.querySelector(".new-book-form");
// Card form info
let newBookTitle = document.getElementById("title-input");
let newBookAuthor = document.getElementById("author-input");
let newBookPages = document.getElementById("pages-input");
let newBookCheckBtn = document.getElementById("read-check");

const mylibrary = [];

let titleValue = "";
let authorValue = "";
let pagesValue = "";
let checkValue = newBookCheckBtn.checked;

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(newTitle, newAuthor, newPages, newCheck) {


    const bookCard = {
        bookInfo: new Book(newTitle,
            newAuthor,
            newPages,
            newCheck,
        )
    }

    mylibrary.push(bookCard)
}


newBookForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    titleValue = newBookTitle.value;
    authorValue = newBookAuthor.value;
    pagesValue = newBookPages.value;
    checkValue = newBookCheckBtn.checked;

    const id = crypto.randomUUID();

    const bookOnTheShelf = document.createElement("div");
    bookOnTheShelf.classList.add("book-card");
    bookOnTheShelf.setAttribute("id", id)

    bookOnTheShelf.innerHTML =
        `<h3 class="title">${titleValue}</h3>

        <p class="author">Author: ${authorValue}</p>

        <p class="pages">Pages: ${pagesValue}</p>

        <p class="check-book">
            <input type="checkbox" name="read" id="read" ${pagesValue ? "checked" : ""}>
            <label for="read">Read</label>
        </p>
        
        <button class="remove-book">remove</button>`
        const removeBtn = bookOnTheShelf.querySelector(".remove-book");
        removeBtn.addEventListener("click", () => removeBook(id));

    bookShelf.appendChild(bookOnTheShelf);

    addBookToLibrary(titleValue, authorValue, pagesValue, checkValue);

    newBookForm.style.display = "none";
});


addNewBook.addEventListener("click", ()=>{
    newBookForm.style.display = "block";
    newBookTitle.value = '';
    newBookAuthor.value = '';
    newBookPages.value = '';
    newBookCheckBtn.checked = true;
} )
