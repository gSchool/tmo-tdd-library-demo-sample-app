# Library Demo Repo

This project is a demo written in JS for the [Library Demo Lesson in tmo-tdd](https://github.com/gSchool/TMO-tdd/blob/feat/cohort-10/units/basic-tdd/demo.md).

It uses [Jest](https://jestjs.io/) as its Test Framework. 

Tested with nodejs version in [.nvmrc](./.nvmrc).

## Steps of the demo are implemented as branches

1. [feat/library-add-book](feat/library-add-book)
1. [feat/library-list-books-alphabetically](feat/library-list-books-alphabetically)
1. [feat/library-checkout-book-by-title](feat/library-checkout-book-by-title)

The last branch has a sample refactor commit for the red-green-refactor cycle.

The idea behind each feature branch is to demonstrate a few concepts:

- Granular features
- Granular commits for test/code under test
- Trunk based development w. short-lived feature branches

Another consideration for the demo may be to refactor the sorting of books in the `get books()` method to not sort, but rather to sort on insertion, so that the `get books()` operation is more performant for reads.

### Master branch is the final solution

The master branch contains the solution after all merges from the feature branches.

This may be used to demonstrate trunk based developmemt practice.