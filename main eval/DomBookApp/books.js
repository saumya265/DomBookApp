const loginData = JSON.parse(localStorage.getItem('loginData'));
if (!loginData || loginData.email !== 'user@enpher.com') {
    window.location.href = 'index.html';
    alert('User Not Logged In')
}

const addBookForm =document.getElementById('add-book-form');
const bookGrid = document.getElementById('book-grid');

addBookForm.addEventListener('submit',(e) => {

    const tittle = document.getElementById('tittle').Value;
    const author = document.getElementById('author').Value;
    const category = document.getElementById('category').Value;

    const newBook = {
        tittle,
        author,
        category,
        isVarified: false,
        availabilityStatus: 'Available',
        borrowedDays: 0,
    };
    fetch('(https://fakestoreapi.com/docs)',{
        method: 'POST',
        headers: {
            'Content-Type' : 'applications/json',

        },
        body: JSON.stringify(newBook),
                
    })
    .then((Response) => Response.json())
    .then(() => {
        alert('Book Added Successfully');
        displayBooks();
    })
    .catch((error) => console.error('Error adding book:', error));

});

function displayBooks() {
    fetch('(https://fakestoreapi.com/docs)')
    .then((Response) => Response.json())
    .then((books) => {
        bookGrid.innerHTML = books.map((book) => 
        <div class ="book-card">
        <h3>${book.tittle}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>category:</strong> ${book.category}</p>
        <button>Manage Book</button>
        </div>

        ).join('');
    })
    .catch((error) => console.error('Error fetching books:', error));

}

displayBooks();
