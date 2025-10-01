export default function Book({book}){
    // console.log(book);
    
    return(
        <div style={{
            border: "2px solid purple",
            borderRadius: "20px",
            padding: "10px",
            marginTop: "15px",
            marginRight: "35px"
        }}>
            <h2>{book.id} {book.title}</h2>
            <p>Category: {book.category}</p>
            <p>Author: {book.author}</p>
            <p>Price: {book.price}</p>
            <p>ISBN: {book.issn}</p>
            <p>Volume: {book.volume}</p>
        </div>
    )
}