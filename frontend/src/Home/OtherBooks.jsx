import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/all-books")
        .then((res) => res.json())
        .then((data) => setBooks(data.slice(4, 10)));
    }, []); //empty array mean effect will only run once
    return (
      <div>
        <BookCards books={books} headline="Other Books" />
      </div>
    )
}

export default OtherBooks