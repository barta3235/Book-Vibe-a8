import { useLoaderData } from "react-router-dom";
import { getReadBooks } from "../../localstorageRead";
import ShowReadInListed from "./ShowReadInListed";

const ReadInListed = () => {
    const books= useLoaderData();
    const localId=getReadBooks();
    console.log(localId);
    

    const selectedBooks= books.filter((book)=>localId.includes(book.bookId));


    return (
        <div className="">
            {
                selectedBooks.map((book,idx)=> <ShowReadInListed key={idx} book={book}></ShowReadInListed> )
            }
        </div>
    );
};

export default ReadInListed;