import { useLoaderData } from "react-router-dom";
import { getReadBooks } from "../../localstorageRead";
import ShowWishInListedBooks from "../wishListInListed/ShowWishInListedBooks";


const ReadInListed = () => {
    const books= useLoaderData();
    const localId=getReadBooks();
    console.log(localId);
    

    const selectedBooks= books.filter((book)=>localId.includes(book.bookId));


    return (
        <div className="">
            {
                selectedBooks.map((book,idx)=> <ShowWishInListedBooks key={idx} book={book}></ShowWishInListedBooks> )
            }
        </div>
    );
};

export default ReadInListed;