class Book {
    static arraylist = [];
  
    constructor(title, author, id) {
      this.title = title;
      this.author = author;
      this.id = id;
    }
  
    static storeBooks() {
      let books;
      const storeData = localStorage.getItem('local');
      if (!storeData) {
        books = [];
      } else {
        books = JSON.parse(storeData);
      }
      return books;
    }
  
    static addBooks(addNewBook) {
      const books = Book.storeBooks();
      if (books) {
        books.push(addNewBook);
        localStorage.setItem('local', JSON.stringify(books));
      }
    }
  
    static showBooks() {
      const books = Book.storeBooks();
      books.forEach((addNewBook) => {
        Book.addBookToList(addNewBook);
      });
    }
  
    static addBookToList(addNewBook) {
      addNewBook.id = newId;
      const bookInfo = `
        <div id="${newId}">
          <p>"<span>${addNewBook.title}</span>" by
          <span class="">${addNewBook.author}</span></p>
          <button id="${newId}" class="remove-btn">Remove</button>
        </div>
      `;
      bookDetail.innerHTML += bookInfo;
      newId += 1;
    }
  
    static deleteBookFromList(e) {
      e.parentElement.remove();
    }
  }