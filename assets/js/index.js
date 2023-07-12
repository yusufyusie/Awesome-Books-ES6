import Book from '../../modules/book.js';
import UI from '../../modules/ui.js';
import LocalStore, { store } from '../../modules/LocalStore.js';

const navList = document.querySelector('#nav-list');
const navAdd = document.querySelector('#nav-add');
const navContact = document.querySelector('#nav-contact');
const titleInput = document.querySelector('.title-book');
const authorInput = document.querySelector('.author-book');
const addButton = document.querySelector('.add-btn');
const bookDisplay = document.querySelector('.books-display');
const errorMsg = document.querySelector('.error-message');
const main = document.querySelector('.section');
const form = document.querySelector('.add-book-form');
const contact = document.querySelector('.contact-info');
let newId = 0;

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const books = LocalStore.storeBooks();
  const newTitle = titleInput.value;
  const newAuthor = authorInput.value;
  let newId;
  const len = books.length;
  if (len === 0 || len === null) {
    newId = 0;
  } else {
    newId = books[len - 1].id + 1;
  }
  const addNewBook = new Book(newTitle, newAuthor, newId);
  if (newTitle.length !== 0 && newAuthor.length !== 0) {
    LocalStore.addBooks(addNewBook);
    UI.addBookToList(addNewBook);
    errorMsg.style.display = 'none';
  } else {
    errorMsg.style.display = 'block';
  }
  form.reset();
});

bookDisplay.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.className === 'remove-btn') {
    const { id } = e.target;
    let books = LocalStore.storeBooks();
    books = books.filter((bk) => JSON.stringify(bk.id) !== id);
    localStorage.setItem('local', JSON.stringify(books));
    UI.deleteBookFromList(e.target);
  }
});

document.addEventListener('DOMContentLoaded', UI.showBooks);

navList.addEventListener('click', () => {
  main.style.display = 'block';
  form.style.display = 'none';
  contact.style.display = 'none';
});

navAdd.addEventListener('click', () => {
  main.style.display = 'none';
  form.style.display = 'block';
  contact.style.display = 'none';
});

navContact.addEventListener('click', () => {
  main.style.display = 'none';
  form.style.display = 'none';
  contact.style.display = 'block';
});