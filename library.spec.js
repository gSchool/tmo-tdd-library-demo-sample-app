const Book = require('./book.js');
const Library = require('./library.js');
describe('Library', () => {
  describe('Given I have a book', () => {
    describe('When I add a book to the library', () => {
      test('Then the book is in the library', () => {
        const _library = new Library();
        const _book = new Book();
        
        _library.add(_book);

        expect(_library.books).toEqual([_book]);
      });
    });
  });

  describe('Given there are books in the library', () => {
    let _library, _book1, _book2, _book3;
    beforeEach(() => {
      _library = new Library();

      _book1 = new Book("War and Peace");
      _book2 = new Book("Lolita");
      _book3 = new Book("Brothers Karamzov");

    });
    describe('When I check for the list of books', () => {
      test('Then I see all books returned and sorted alphabetically by title', () => {
        _library.add(_book1);
        _library.add(_book2);
        _library.add(_book3);

        expect(_library.books).toEqual([_book3, _book2, _book1]);
      });
    });

    describe('When I search for a book by title', () => {
      test('Then I get the book of that title', () => {
        _library.add(_book1);
        _library.add(_book2);
        _library.add(_book3);

        expect(_library.search('War and Peace')).toEqual(_book1);
      });
      test('Then I get the book of that title no matter the order of books added', () => {
        _library.add(_book2);
        _library.add(_book3);
        _library.add(_book1);

        expect(_library.search('War and Peace')).toEqual(_book1);
      });
    });
  });
});
