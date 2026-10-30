import {useState, useEffect} from "react";
import BookForm from "../components/BookForm";

function ManageBooks() {
const [books, setBooks] = useState([]);
const [editingBook, setEditingBook] = useState(null);

function loadBooks () {
    fetch("http://localhost:8080/books")
    .then((response) => response.json())
    .then((data) => setBooks(data));
}

function deleteBook(id) {
    fetch(`http://localhost:8080/books/${id}`,{
        method: "DELETE",

    })
    .then((response) => {
        console.log("Deleting Book ID: ", id);
        if (!response.ok) {
            throw new Error("Failed to delete book.");
        }

        loadBooks();
    }) ;
}

useEffect(() => {
    loadBooks()
}, []);



return (
<main>
<h1>Manage Books</h1>
<BookForm onBookAdded={loadBooks} />

<h2>Current Books</h2>
<p>
Add, edit and delete books from the catalog.
</p>

<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Actions</th>
        </tr>
    </thead>
</table>
<tbody>
    {books.map((book) => (
        <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.price}</td>
            <td>
                <button>Edit</button>
                <button onClick={() => deleteBook(book.id)}>Delete</button>
            </td>
        </tr>
    ))}
</tbody>
</main>
);
}
export default ManageBooks;