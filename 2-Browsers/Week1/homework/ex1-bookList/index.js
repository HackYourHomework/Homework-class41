//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

-----------------------------------------------------------------------------*/
//cspell: enable

function createBookList(books) {
  const bookDiv = document.querySelector('#bookList');
  const ulList = document.createElement('ul');
  bookDiv.appendChild(ulList);

  for (let i = 0; i < books.length; i++) {
    const bookTitle = document.createElement('p');
    bookTitle.textContent = books[i].title + '-' + books[i].author;
    const liBook = document.createElement('li');
    liBook.setAttribute('id', 'book' + i);
    ulList.appendChild(liBook);
    liBook.append(bookTitle);
  }
  const firstBook = document.querySelector('#book0');
  const secondBook = document.querySelector('#book1');
  const thirdBook = document.querySelector('#book2');
  const firstImg = document.createElement('img');
  const secondImg = document.createElement('img');
  const thirdImg = document.createElement('img');
  firstImg.src = 'assets/the_design_of_everyday_things.jpg';
  secondImg.src = 'assets/the_most_human_human.jpg';
  thirdImg.src = 'assets/the_pragmatic_programmer.jpg';
  firstBook.append(firstImg);
  secondBook.append(secondImg);
  thirdBook.append(thirdImg);
  firstImg.alt = 'The design of everyday things cover';
  secondImg.alt = 'The most human human cover';
  thirdImg.alt = 'The pragmatic cover';
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
