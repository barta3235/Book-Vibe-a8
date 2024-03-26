import { getWishBooks } from "../../localstorageRead";
import { useLoaderData } from "react-router-dom";
import ShowWishInListedBooks from "./ShowWishInListedBooks";

const WishListInListed = () => {
    const books= useLoaderData();
    const localId=getWishBooks();
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

export default WishListInListed;