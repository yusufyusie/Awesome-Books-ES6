addButton.addEventListener('click', (e) => {
    e.preventDefault();
    const books = Book.storeBooks();
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
      Book.addBooks(addNewBook);
      Book.addBookToList(addNewBook);
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
      let books = Book.storeBooks();
      books = books.filter((bk) => JSON.stringify(bk.id) !== id);
      localStorage.setItem('local', JSON.stringify(books));
      Book.deleteBookFromList(e.target);
    }
  });
  
  document.addEventListener('DOMContentLoaded', Book.showBooks);
  document.addEventListener('DOMContentLoaded', timeDisplay);
  
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