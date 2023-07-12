export default class LocalStore {
    static storeBooks = () => {
      let books;
      const storeData = localStorage.getItem('local');
      if (!storeData) {
        books = [];
      } else {
        books = JSON.parse(storeData);
      }
      return books;
    }

      static addBooks = (addNewBook) => {
        const books = LocalStore.storeBooks();
        if (books) {
          books.push(addNewBook);
          localStorage.setItem('local', JSON.stringify(books));
        }
      }
}
export const store = new LocalStore();