function createBookList(books) {
  const bookList = document.getElementById('bookList');
  const ul = document.createElement('ul');
  bookList.appendChild(ul);

  books.forEach((element) => {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const bookImage = document.createElement('img');
    bookImage.setAttribute('src', tittleToPath(element.title));
    if (element.alreadyRead) {
      bookImage.style.backgroundColor = 'green';
    } else {
      bookImage.style.backgroundColor = 'red';
    }

    bookImage.alt = element.title;

    p.textContent = element.title + ' ' + element.author;

    li.appendChild(p);
    li.appendChild(bookImage);
    ul.appendChild(li);
  });
}

function tittleToPath(tittle) {
  return `./assets/${tittle.toLowerCase().split(' ').join('_')}.jpg`;
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
