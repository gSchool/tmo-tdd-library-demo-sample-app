# Library Demo Repo

This project is a demo written in JS for the [Library Demo Lesson in tmo-tdd](https://github.com/gSchool/TMO-tdd/blob/feat/cohort-10/units/basic-tdd/demo.md).

It uses [Jest](https://jestjs.io/) as its Test Framework. 

Tested with nodejs version in [.nvmrc](./.nvmrc).

## Steps of the demo are implemented as branches

1. [feat/library-add-book](feat/library-add-book)
1. [feat/library-list-books-alphabetically](feat/library-list-books-alphabetically)
1. [feat/library-checkout-book-by-title](feat/library-checkout-book-by-title)

The last branch has a sample refactor commit for the red-green-refactor cycle.

Another consideration for the demo may be to refactor the sorting of books in the `get books()` method to not sort, but rather to sort on insertion, so that the `get books()` operation is more performant for reads.