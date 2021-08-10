function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  //const 
  //get all the borrowed books
  const borrowed = books.filter((book) => book.borrows.some((status) => status.returned === false));
  const returned = books.filter((book) => book.borrows.every((status) => status.returned === true));

  return [borrowed, returned];
}

function getBorrowersForBook(book, accounts) {
  const borrowers = book.borrows;
  const tenBorrowers = borrowers.slice(0,10);
  const finalArray = [];
  tenBorrowers.forEach((borrowed) => {
    const singleAccount = accounts.find((account) => account.id === borrowed.id);
    singleAccount.returned = borrowed.returned;
    //let's find the account
    finalArray.push(singleAccount);
  })
  return finalArray;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
