import Book from '../../modules/Book.js';
import UI from '../../modules/ui.js';
import LocalStore from '../../modules/LocalStore.js';

const navList = document.querySelector('#nav-list');
const navAdd = document.querySelector('#nav-add');
const navContact = document.querySelector('#nav-contact');
const timeInfo = document.querySelector('#time-info');
const titleInput = document.querySelector('.title-book');
const authorInput = document.querySelector('.author-book');
const addButton = document.querySelector('.add-btn');
const bookDisplay = document.querySelector('.books-display');
const errorMsg = document.querySelector('.error-message');
const main = document.querySelector('.section');
const form = document.querySelector('.add-book-form');
const contact = document.querySelector('.contact-info');

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

const timeDisplay = () => {
  const myDate = new Date();

  const daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'August', 'October', 'November', 'December'];

  const date = myDate.getDate();
  const month = monthsList[myDate.getMonth()];
  const year = myDate.getFullYear();
  const day = daysList[myDate.getDay()];

  const today = `${day}, ${month} ${date}, ${year},`;

  let amOrPm;
  const twelveHours = () => {
    if (myDate.getHours() > 12) {
      amOrPm = 'PM';
      const twentyFourHourTime = myDate.getHours();
      const conversion = twentyFourHourTime - 12;
      return `${conversion}`;
    }
    amOrPm = 'AM';
    return `${myDate.getHours()}`;
  };
  const hours = twelveHours();
  const minutes = myDate.getMinutes();

  const currentTime = `${hours}:${minutes} ${amOrPm}`;

  timeInfo.innerHTML = `${today} ${currentTime}`;
};

document.addEventListener('DOMContentLoaded', timeDisplay);