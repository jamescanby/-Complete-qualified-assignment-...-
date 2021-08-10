function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const borrowed = books.filter((borrow) => borrow.borrows.some((borrow) => borrow.returned === false));
  return borrowed.length;
}
//Create a Helper Function
function getTopFive(arrayOfObjects) { 
  arrayOfObjects.sort((a,b) => b.count > a.count ? 1 : -1);
  return arrayOfObjects.slice(0,5);
}

function getMostCommonGenres(books) {
  const counts = []
  //pull out all the genres
  const allGenres = books.map((book) => book.genre);
  const uniqueGenres = [...new Set(allGenres)];
  uniqueGenres.forEach((book) => {
    const singleCount = books.filter((singleBook) => singleBook.genre === book).length;
      counts.push({name: book, count: singleCount});
  });
  //Helper Function implemented here
  return getTopFive(counts);
}

function getMostPopularBooks(books) {
  //find the books that are borrowed the most
  const counts = [];
  books.forEach((book) => {
    //get the count for each
    counts.push({name: book.title, count: book.borrows.length});
  })
  //Helper Function implemented here
  return getTopFive(counts);
}

function getMostPopularAuthors(books, authors) {
  const counts = [];
  books.forEach(book => {
    //get the count for each
    counts.push({id: book.authorId, count: book.borrows.length});
  })
  //Helper Function implemented here
  const topFive = getTopFive(counts); 
  //attach the authors
  const authorList = [];
  topFive.forEach((author) => {
    const singleAuthor = {};
    const foundAuthor = authors.find((newAuthor) => newAuthor.id === author.id);
    authorList.push({
      name: `${foundAuthor.name.first} ${foundAuthor.name.last}`,
      count: author.count
    })
  })  
  return authorList;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
