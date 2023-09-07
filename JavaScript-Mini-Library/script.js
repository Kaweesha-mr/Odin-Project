

const addBook = document.querySelector('.btn');
const cancel = document.querySelector('.Cancel-form');
const dialog = document.getElementById('enter-book');
const showButton = document.getElementById('showDialog');


addBook.addEventListener('click', () => {
    dialog.showModal();
});

