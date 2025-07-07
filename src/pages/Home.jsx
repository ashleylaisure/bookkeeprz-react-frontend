import { useState, useEffect } from "react"
import api from "../api"
import Book from "../components/Book";

function Home() {

    const [books, setBooks] = useState([]);
    const [author, setAuthor] = useState("")
    const [title, setTitle] = useState("")

    const fetchBooks = async () => {
    try {
        const res = await api.get('/books/');
        setBooks(res.data);
        } catch (err) {
        alert('Failed to fetch books');
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const createBook = async (e) => {
        e.preventDefault();
        try {
        await api.post('/books/', { title, author });
        setTitle('');
        setAuthor('');
        fetchBooks();
        } catch {
        alert('Failed to create book');
        }
    };

    const deleteBook = async (id) => {
        try {
        await api.delete(`/books/${id}/`);
        fetchBooks();
        } catch {
        alert('Failed to delete book');
        }
    };


    return (
        <div>
            <div>
                <div>Books</div>
                {books.map((book) => 
                    <Book book={book} onDelete={deleteBook} key={book.id}/>
                )}
            </div>
            
            <h2>Create a Book</h2>
            <form action="" onSubmit={createBook}>
                <label htmlFor="title">Title:</label>
                <br />
                <input 
                    type="text" 
                    id="title" 
                    name="title"
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}/>

                <label htmlFor="author">Author:</label>
                <br />
                <input 
                    type="text" 
                    id="author" 
                    name="author"
                    value={author}
                    required
                    onChange={(e) => setAuthor(e.target.value)}/>
                <br />
                <button type="submit"> Submit</button>
            </form>
        </div>
    )
}

export default Home
