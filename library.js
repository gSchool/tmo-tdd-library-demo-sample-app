class Library {
  _books = [];
  add(_book) { this._books.push(_book) };

  get books() {
    return this._books.sort( (_book1, _book2) => _book1.title.localeCompare(_book2.title) );
  };
};

module.exports = Library;