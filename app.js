let searchFood =() => {
    let searchField = document.getElementById('search-field');
    let searchText = searchField.value;
    searchField.value = '';
    // if(searchText = '') {
    //     let error = document.getElementById('error');
    //     error.innerHTML = "Food Name is must not be empty"
    // } else {
        let url = `https://www.googleapis.com/books/v1/volumes?q=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.items));
    // }
    
    
}

let displaySearchResult= (books) => {
    //console.log(books)
    let searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if(books==null) {
        let error = document.getElementById('error');
        error.innerHTML = "No Data Found!"
    }
    for(let book of books) {
        //console.log(book)
        let div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadBookDetails(${book.volumeInfo.industryIdentifiers[0].identifier})" class="card">
          <img src="${book.volumeInfo.imageLinks.thumbnail}" class="card-img-top" alt="Book Image" />
          <div class="card-body">
            <h5 class="card-title">Book Name: ${book.volumeInfo.title} </h5>
            <p class="card-text">
              Descripttion: ${book.volumeInfo.description.slice(0,100)}
            </p>
          </div>
        </div>`

        searchResult.appendChild(div);
    }
    
    
} 

let loadBookDetails = (bookId) => {
       
       let url = `https://www.googleapis.com/books/v1/volumes?q=${bookId}`;
    //    console.log(url)
       fetch(url)
       .then(res =>res.json())
       .then(data =>displaySingleBook(data.items[0]))
}

 let = displaySingleBook = (singleBook) => {
     //console.log(singleBook)
    let singleBookDetails = document.getElementById('single-book-details');
    let div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = ` 
    <img src="${singleBook.volumeInfo.imageLinks.thumbnail}" class="card-img-top" alt="Book Image" />
        <div class="card-body">
          <h5 class="card-title"> Book Name: ${singleBook.volumeInfo.title}</h5>
          <p class="card-text">Description: ${singleBook.volumeInfo.description.slice(0,100)}</p>
        </div>
    `
    singleBookDetails.appendChild(div);




 }