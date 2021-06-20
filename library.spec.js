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