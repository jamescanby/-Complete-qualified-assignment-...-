function findAccountById(accounts, id) {
  return accounts.find(singleAccount => singleAccount.id === id);
}

function sortAccountsByLastName(accounts) {
    return accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last) ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  books.forEach(singleBook => {
    const found = singleBook.borrows.some((singleBorrow) => singleBorrow.id === account.id);
    if (found){
      total++;
    }
  });
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  //get all books taken out by an account
  const accountBooks = books.filter(singleBook => singleBook.borrows.some(singleBorrow =>       
    singleBorrow.id === account.id && singleBorrow.returned === false));
  accountBooks.forEach((book) => {
    book.author = authors.find((author) => author.id === book.authorId);
  })
  return accountBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
