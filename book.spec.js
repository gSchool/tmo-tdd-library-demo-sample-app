const { TestWatcher } = require("jest");

describe('Book', () => {
  describe('Given a book title', () => {
    describe('When I make a new book', () => {
      test('Then it should be created with that title', () => {
        const Book = require('./book.js');

        const _book = new Book('War and Peace');

        expect(_book.title).toEqual('War and Peace');
      });
    });
  });
});