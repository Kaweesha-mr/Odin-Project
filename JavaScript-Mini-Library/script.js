

const addBook = document.querySelector('.add-book');
const cancel = document.querySelector('.Cancel-form');
const dialog = document.getElementById('enter-book');
const showButton = document.getElementById('showDialog');






addBook.addEventListener('click', () => {
    dialog.showModal();
});
