describe('Library', () => {
  describe('Given I have a book', () => {
    describe('When I add a book to the library', () => {
      test('Then the book is in the library', () => {
        const Library = require('./library.js'); 
        const Book = require('./book.js');

        const _library = new Library();
        const _book = new Book();
        
        _library.add(_book);

        expect(_library.books).toEqual([_book]);
      });
    });
  });

  describe('Given there are books in the library', () => {
    describe('When I check for the list of books', () => {
      test('Then I see all books returned and sorted alphabetically by title', () => {
        const Library = require('./library.js');
        const Book = require('./book.js');

        const _library = new Library();

        const _book1 = new Book("War and Peace");
        const _book2 = new Book("Lolita");
        const _book3 = new Book("Brothers Karamzov");

        _library.add(_book1);
        _library.add(_book2);
        _library.add(_book3);

        expect(_library.books).toEqual([_book3, _book2, _book1]);
      });
    });
  });
});
