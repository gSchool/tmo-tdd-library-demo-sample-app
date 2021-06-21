class Library {
  _books = [];
  add(_book) { this._books.push(_book) };

  get books() {
    return this._books.sort( (_book1, _book2) => _book1.title.localeCompare(_book2.title) );
  };

  search(_title) {
    return this._books.find( ({ title }) => title === _title );
  }
};

module.exports = Library;