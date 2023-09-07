

const cardContainer = document.querySelector('.book-holder');
const addBook = document.querySelector('.btn');
const dialog = document.getElementById('enter-book');
const showButton = document.getElementById('showDialog');
const addtoArray = document.getElementById('add-book');


class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

const myLibrary = [];


addBook.addEventListener('click', () => {
    dialog.showModal();
});


addtoArray.addEventListener('click', () => {
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('Author').value;
    const pages = document.getElementById('pages').value;

    const book = new Book(title, author, pages);
    myLibrary.push(book);

    console.log(myLibrary);
    dialog.close();

    createbookCard(book);



});


const createbookCard = (book) => {

    const bookCard = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')

    bookCard.classList.add('book-card')
    
    title.textContent = `"${book.title}"`
    author.textContent =  `"${book.author}"`
    pages.textContent = `${book.pages} pages`


    bookCard.appendChild(title)
    bookCard.appendChild(author)
    bookCard.appendChild(pages)
    cardContainer.appendChild(bookCard)

}

    



