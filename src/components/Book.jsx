import React from 'react'

function Book({book, onDelete}) {
    const formattedDate = new Date(book.date_added).toLocaleDateString("en-US")

    return (
        <div className="container">
            <p className="book-title">{book.title}</p>
            <p className="book-author">{book.author}</p>
            <p className='book-date'>{formattedDate}</p>
            <button className='delete-button' onClick={() => onDelete(book.id)}>Delete</button>
        </div>
    )
}

export default Book