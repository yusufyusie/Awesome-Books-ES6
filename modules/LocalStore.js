export default class LocalStore {
    constructor() {
        this.newId = this.storeBooks().length + 1;

    }
    storeBooks = () => {
        let books;
        const storeData = localStorage.getItem('local');
        if (!storeData) {
          books = [];
        } else {
          books = JSON.parse(storeData);
        }
        return books;
      }
    
      addBooks = (book) => {
         const addNewBook = {
            id: this.newId,
            title: book.title,
            author: book.author,
         };
        const books = LocalStore.storeBooks();
        if (books) {
          books.push(addNewBook);
          localStorage.setItem('local', JSON.stringify(books));
          this.newId += 1;
        }
      }
}
export const store = new LocalStore();