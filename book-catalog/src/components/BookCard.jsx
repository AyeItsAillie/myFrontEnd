import { useState, useEffect } from 'react'
import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import '../App.css'

function BookCard({ book }) {
  return (
    <article>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>${book.price}</p>
      <button>Add to Cart</button>
    </article>
);
}

export default BookCard;