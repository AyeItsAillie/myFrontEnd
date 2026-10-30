import { useState } from "react";

function BookForm({onBookAdded}) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");

function handleSubmit(event) {
event.preventDefault();
const newBook = {
id: "1",
title: title,
author: author,
price: Number(price),
};


fetch("http://localhost:8080/books", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newBook),
    }).then((response) => {
        if(!response.ok) {
            throw new Error("Failed to create book");

        }
        return response.json();
    })
    .then((data) => {
    console.log("Book Created: ", data);

    setTitle("");
    setAuthor("");
    setPrice("");

    onBookAdded();
})
.catch((error) => {
console.error(error)});
}

return (
<form onSubmit={handleSubmit}>
    <label>
    Title
    <input type="text" value={title} onChange={event =>
        setTitle(event.target.value)} />
    </label>
    <label>
    Author
    <input type="text" value={author} onChange={event =>
        setAuthor(event.target.value)} />
    </label>
    <label>
    Price
    <input type="number" value={price} onChange={event =>
        setPrice(event.target.value)} />
    </label>
<button>Add Book</button>
</form>
);


}
export default BookForm;