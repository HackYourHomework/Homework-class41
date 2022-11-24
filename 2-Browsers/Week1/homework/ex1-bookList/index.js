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
  const ul = document.createElement('ul');

  books.forEach((element) => {
    // For every element in 'books' list do chages below vv
    const li = document.createElement('li');
    const p = document.createElement('p');
    const img = document.createElement('img');
    p.textContent = element.title + ' - ' + element.author;

    img.src = './assets/' + element.title.split(' ').join('_') + '.jpg';
    img.alt = element.title;

    li.appendChild(p); // p became child of li
    li.appendChild(img); // img became child of li

    //To color li background
    element.alreadyRead
      ? (li.style.backgroundColor = 'green')
      : (li.style.backgroundColor = 'red');

    return ul.appendChild(li); // 'li' that we create with p and img and background: added as the child of ul
  });

  return ul;
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
