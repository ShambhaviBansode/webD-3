var addBookId = 0;
function addToCart (book) {
    var selectedBook = document.createElement('div');
    selectedBook.classList.add('cartImg');
    selectedBook.setAttribute('id',addBookId);
    var img = document.createElement('img');
    img.setAttribute('src',book.children[0].currentSrc)
    var title = document.createElement('div');
    title.innerText = book.children[1].innerText;
    var delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.setAttribute('onclick','del('+addBookId+')');
    var cartBooks = document.getElementById('title');
    selectedBook.append(img);
    selectedBook.append(title);
    selectedBook.append(delBtn);
    cartBooks.append(selectedBook);
}
function del(book) {
    document.getElementById(book).remove();
}