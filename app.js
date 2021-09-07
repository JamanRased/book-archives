
const searchTheBook = () => {
    const searchInput = document.getElementById('search-area');
    const searchText  = searchInput.value;
    document.getElementById('bookList').textContent = '';
    searchInput.value = '';
    document.getElementById('show-result').innerText = '';

    const url = `https://openlibrary.org/search.json?q=${searchText}`;

    fetch(url)
        .then(response => response.json())
        .then(data => allBooks(data.docs));
}
const allBooks = (books) =>{
    const bookList = document.getElementById('bookList')
    const showResult = document.getElementById('show-result');

    if (books.length === 0 ){
        showResult.innerText = 'No Result Found';
    }else{
        showResult.innerText = `Show of books : ${books.length}`;

        for(const book of books){
            const bookArcive = document.createElement('div')
            bookArcive.classList.add('col-md-3')
            const imgUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
            bookArcive.innerHTML = `
            <div class="shadow rounded p-3 m-2 w-100 h-100">
                <img class = img-fluid src="${imgUrl}" alt="">
                <h3>${book.title}</h3>
                <p>Author by : ${book.author_name.slice(0, 1)} </p>
                <p>First Published : ${book.first_publish_year} </p>
                <p>Publisher : ${book.publisher} </p>
            </div>
            `
            bookList.appendChild(bookArcive);
        }
    }
}