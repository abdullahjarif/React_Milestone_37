import Book from "./book";

export default function Library({books}) {
    return(
        <div style={{
            border: "2px solid lightblue",
            margin: "10px",
            padding: "10px",
            borderRadius: "20px"
        }}>
            <h2 style={{
                color: "yellow"
            }}>National Central Library</h2>
            <p>Books Collection: {books.length}</p>
            <p>Address: Bashundhara, Dhaka</p>
            <ul>
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </ul>
        </div>
    )
}