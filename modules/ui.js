import { store } from "./LocalStore";
export default class UI {
    constructor(){

    }
    static showBooks() {
        const books = store.storeBooks();
        books.forEach((addNewBook) => {
          UI.addBookToList(addNewBook);
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