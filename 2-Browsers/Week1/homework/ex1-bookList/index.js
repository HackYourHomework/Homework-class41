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
  const bookList = document.createElement('ul');
  document.getElementById('bookList').appendChild(bookList);
  bookList.setAttribute(
    'style',
    'height: 70%; width: 80%; margin: auto; text-align: center; '
  );
  books.forEach((book) => {
    const bookElement = document.createElement('li');
    bookList.appendChild(bookElement);
    bookElement.style.cssText =
      'border: 1.5 px solid; display: inline-block; padding: 30px; margin: 20px 10px; width: 30%';
    bookElement.style.background = book.alreadyRead ? 'green' : 'red';

    const paragraph = document.createElement('p');
    bookElement.appendChild(paragraph);
    paragraph.textContent = `${book.title} - ${book.author}`;
    paragraph.style.cssText =
      'font-size: 16px; font-weight: bold; margin-bottom: 50px';

    const image = document.createElement('img');
    bookElement.appendChild(image);
    image.alt = `${book.title} image`;
    image.src =
      book.isbn === '978-0465050659'
        ? 'assets/the_design_of_everyday_things.jpg'
        : book.isbn === '978-1617933431'
        ? 'assets/the_most_human_human.jpg'
        : 'assets/the_pragmatic_programmer.jpg';
    image.style.cssText = 'width: 250px; height: 350px';
  });

  return bookList;
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
